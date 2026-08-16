'use client';

/**
 * TrustGateScene — the Xavorian story without words.
 *
 * A document travels through three verification gates.
 * Each gate lights up as it passes. On the far side, the house
 * it belongs to is crowned with a shield. That's the product.
 *
 * Pure primitives — no model downloads, mobile-friendly.
 */
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, ContactShadows, RoundedBox } from '@react-three/drei';

const PURPLE = '#7C3AED';
const INK = '#141414';
const PAPER = '#f5f3f0';
const GREEN = '#2e9e66';

const GATE_X = [-1.9, 0, 1.9];
const CARD_START = -3.4;
const CARD_END = 3.3;
const CYCLE_SECONDS = 7.5;

/** Shared mutable state for card position this frame. */
const cardState = { x: CARD_START, arrived: false };

/* ---------------------------------- parts ---------------------------------- */

function CameraRig() {
  useFrame(({ camera, pointer }) => {
    const targetX = pointer.x * 0.55;
    const targetY = 1.75 + pointer.y * 0.3;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.045);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.045);
    camera.lookAt(0, 0.9, 0);
  });
  return null;
}

function Gate({ x, index }: { x: number; index: number }) {
  const ring = useRef<THREE.Mesh>(null);
  const mat = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(({ clock }) => {
    if (!ring.current || !mat.current) return;
    const dist = Math.abs(cardState.x - x);
    const near = Math.max(0, 1 - dist / 1.1); // 1 when card is inside the gate
    const passed = cardState.x > x + 0.6;

    mat.current.emissiveIntensity = 0.18 + near * 1.4 + Math.sin(clock.elapsedTime * 1.4 + index) * 0.05;
    ring.current.scale.setScalar(1 + near * 0.07);
    ring.current.position.y = 1.02 + Math.sin(clock.elapsedTime * 0.9 + index * 1.7) * 0.035;

    // once passed, gate settles into a calm satisfied state
    const target = passed ? 0.9 : near > 0.05 ? 1 : 0.25;
    mat.current.emissiveIntensity = THREE.MathUtils.lerp(mat.current.emissiveIntensity, passed ? 0.55 : 0.18 + near * 1.4, 0.12);
    void target;
  });

  return (
    <group position={[x, 0, 0]}>
      {/* pedestal */}
      <mesh position={[0, 0.06, 0]}>
        <cylinderGeometry args={[0.16, 0.2, 0.12, 24]} />
        <meshStandardMaterial color={INK} roughness={0.5} metalness={0.1} />
      </mesh>
      {/* ring */}
      <mesh ref={ring} position={[0, 1.02, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.72, 0.045, 20, 64]} />
        <meshStandardMaterial
          ref={mat}
          color={INK}
          emissive={PURPLE}
          emissiveIntensity={0.25}
          roughness={0.35}
          metalness={0.25}
        />
      </mesh>
    </group>
  );
}

function DocumentCard() {
  const group = useRef<THREE.Group>(null);
  const seal = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = (clock.elapsedTime % CYCLE_SECONDS) / CYCLE_SECONDS;

    // ease through the course, hold briefly at arrival, then teleport back
    const travel = THREE.MathUtils.smoothstep(t, 0.04, 0.72);
    const x = THREE.MathUtils.lerp(CARD_START, CARD_END, travel);
    cardState.x = x;
    cardState.arrived = travel > 0.985;

    group.current.position.x = x;
    group.current.position.y = 1.02 + Math.sin(travel * Math.PI * 3) * 0.06;
    group.current.rotation.y = Math.sin(travel * Math.PI * 2) * 0.18;
    group.current.rotation.z = Math.sin(travel * Math.PI) * 0.05;

    // seal turns green as it clears the last gate
    if (seal.current) {
      const cleared = x > GATE_X[2] + 0.6;
      const c = new THREE.Color(cleared ? GREEN : PURPLE);
      seal.current.color.lerp(c, 0.1);
      seal.current.emissive.lerp(c, 0.1);
    }

    // fade out just before loop reset
    const fade = t > 0.94 ? Math.max(0, 1 - (t - 0.94) / 0.06) : t < 0.03 ? t / 0.03 : 1;
    group.current.scale.setScalar(Math.max(0.001, fade));
  });

  return (
    <group ref={group} position={[CARD_START, 1.02, 0]}>
      {/* document body */}
      <RoundedBox args={[0.42, 0.56, 0.035]} radius={0.02} smoothness={4}>
        <meshStandardMaterial color="#ffffff" roughness={0.55} metalness={0.02} />
      </RoundedBox>
      {/* text lines */}
      {[0.16, 0.06, -0.04].map((y, i) => (
        <mesh key={i} position={[0, y, 0.021]}>
          <boxGeometry args={[0.26, 0.028, 0.004]} />
          <meshStandardMaterial color="#c9c6c1" roughness={0.8} />
        </mesh>
      ))}
      {/* seal */}
      <mesh position={[0.12, -0.18, 0.026]}>
        <cylinderGeometry args={[0.055, 0.055, 0.012, 24]} />
        <meshStandardMaterial ref={seal} color={PURPLE} emissive={PURPLE} emissiveIntensity={0.8} roughness={0.3} />
      </mesh>
    </group>
  );
}

function House() {
  const shieldMat = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(({ clock }) => {
    if (shieldMat.current) {
      const target = cardState.arrived ? 2.4 : 0.9;
      shieldMat.current.emissiveIntensity = THREE.MathUtils.lerp(shieldMat.current.emissiveIntensity, target, 0.06);
    }
    void clock;
  });

  return (
    <group position={[3.35, 0, 0]} rotation={[0, -0.4, 0]}>
      {/* body */}
      <mesh position={[0, 0.42, 0]}>
        <boxGeometry args={[0.8, 0.68, 0.7]} />
        <meshStandardMaterial color="#ffffff" roughness={0.7} />
      </mesh>
      {/* roof */}
      <mesh position={[0, 0.93, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[0.68, 0.42, 4]} />
        <meshStandardMaterial color={INK} roughness={0.45} />
      </mesh>
      {/* door */}
      <mesh position={[0, 0.28, 0.352]}>
        <boxGeometry args={[0.2, 0.4, 0.02]} />
        <meshStandardMaterial color={INK} roughness={0.5} />
      </mesh>
      {/* shield */}
      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={1.1}>
        <mesh position={[0, 1.75, 0]}>
          <octahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial
            ref={shieldMat}
            color={PURPLE}
            emissive={PURPLE}
            emissiveIntensity={0.9}
            roughness={0.25}
            metalness={0.35}
          />
        </mesh>
      </Float>
    </group>
  );
}

function Platform() {
  return (
    <>
      <RoundedBox args={[8, 0.14, 2.6]} radius={0.07} smoothness={4} position={[0, -0.07, 0]}>
        <meshStandardMaterial color={PAPER} roughness={0.9} />
      </RoundedBox>
      <ContactShadows position={[0, 0.005, 0]} opacity={0.28} scale={11} blur={2.6} far={3.4} resolution={256} frames={1} />
    </>
  );
}

/* ---------------------------------- canvas --------------------------------- */

function VisibilityGate({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const { gl, scene, camera } = useThree();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setVisible(isVisible);
        if (isVisible) {
          gl.setAnimationLoop(() => {
            gl.render(scene, camera);
          });
        } else {
          gl.setAnimationLoop(null);
        }
      },
      { rootMargin: '100px', threshold: 0.01 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      gl.setAnimationLoop(null);
    };
  }, [gl, scene, camera]);

  return <div ref={ref}>{visible && children}</div>;
}

export default function TrustGateScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.75, 7.2], fov: 32 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
      aria-hidden="true"
      frameloop="demand"
    >
      <ambientLight intensity={1.05} />
      <directionalLight position={[4, 7, 5]} intensity={1.15} color="#ffffff" />
      <pointLight position={[-3.2, 2.6, 2.4]} intensity={3} distance={8} color={PURPLE} />

      <CameraRig />
      <Platform />
      {GATE_X.map((x, i) => (
        <Gate key={x} x={x} index={i} />
      ))}
      <DocumentCard />
      <VisibilityGate>
        <House />
      </VisibilityGate>
      <DocumentCard />
      {GATE_X.map((x, i) => (
        <Gate key={x} x={x} index={i} />
      ))}
      <Platform />
    </Canvas>
  );
}

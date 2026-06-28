import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Sun, Moon, Eye, ShieldCheck, Zap, RotateCcw } from "lucide-react";

interface ThreeDHouseViewerProps {
  propertyName?: string;
}

export default function ThreeDHouseViewer({ propertyName = "The One & Only Peninsula" }: ThreeDHouseViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isNight, setIsNight] = useState(false);
  const [activeRoom, setActiveRoom] = useState<"exterior" | "living" | "master" | "pool">("exterior");
  const [autoRotate, setAutoRotate] = useState(true);

  // Keep references to animate lighting and camera smoothly
  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  
  // Lights
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const hemiLightRef = useRef<THREE.HemisphereLight | null>(null);
  const interiorLightsRef = useRef<THREE.PointLight[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    // SCENE
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(isNight ? 0x07070a : 0x141419);
    scene.fog = new THREE.FogExp2(isNight ? 0x07070a : 0x141419, 0.025);

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.set(12, 8, 12);
    cameraRef.current = camera;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.02; // Prevents camera from going under floor
    controls.minDistance = 5;
    controls.maxDistance = 25;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.6;
    controlsRef.current = controls;

    // LIGHTS
    const hemiLight = new THREE.HemisphereLight(
      isNight ? 0x223344 : 0xffffff,
      isNight ? 0x111122 : 0x444444,
      isNight ? 0.3 : 0.8
    );
    scene.add(hemiLight);
    hemiLightRef.current = hemiLight;

    const dirLight = new THREE.DirectionalLight(isNight ? 0x334466 : 0xffeedd, isNight ? 0.4 : 1.2);
    dirLight.position.set(10, 15, 8);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.bias = -0.001;
    scene.add(dirLight);
    dirLightRef.current = dirLight;

    // HELPER FLOORS & GROUND
    // Reflection Pool Floor
    const poolGeo = new THREE.PlaneGeometry(30, 30);
    const poolMat = new THREE.MeshStandardMaterial({
      color: isNight ? 0x050e18 : 0x0f2a40,
      roughness: 0.1,
      metalness: 0.9,
    });
    const pool = new THREE.Mesh(poolGeo, poolMat);
    pool.rotation.x = -Math.PI / 2;
    pool.position.y = -1;
    pool.receiveShadow = true;
    scene.add(pool);

    // Marble Base / Foundation
    const foundationGeo = new THREE.BoxGeometry(8, 0.4, 8);
    const foundationMat = new THREE.MeshStandardMaterial({
      color: 0xe5e5e5,
      roughness: 0.2,
      metalness: 0.1,
    });
    const foundation = new THREE.Mesh(foundationGeo, foundationMat);
    foundation.position.y = -0.2;
    foundation.receiveShadow = true;
    foundation.castShadow = true;
    scene.add(foundation);

    // HOUSE STRUCTURE (Luxury Minimal Cubes)
    // 1st Floor Block (Living Room)
    const floor1Geo = new THREE.BoxGeometry(7, 2, 5);
    const floor1Mat = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      roughness: 0.5,
      metalness: 0.2,
    });
    const floor1 = new THREE.Mesh(floor1Geo, floor1Mat);
    floor1.position.set(-0.2, 1, 0.5);
    floor1.castShadow = true;
    floor1.receiveShadow = true;
    scene.add(floor1);

    // Glass Facade (Living room giant window)
    const glassGeo = new THREE.PlaneGeometry(6, 1.8);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
      roughness: 0.1,
      transmission: 0.9,
      thickness: 0.5,
    });
    const glass1 = new THREE.Mesh(glassGeo, glassMat);
    glass1.position.set(-0.2, 1, 3.01);
    scene.add(glass1);

    // 2nd Floor Block (Master Suite, cantilevered)
    const floor2Geo = new THREE.BoxGeometry(4.5, 1.8, 4.5);
    const floor2Mat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.1,
    });
    const floor2 = new THREE.Mesh(floor2Geo, floor2Mat);
    floor2.position.set(1.5, 2.9, -0.5);
    floor2.castShadow = true;
    floor2.receiveShadow = true;
    scene.add(floor2);

    // Column Pillars (Golden Accent)
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.9,
      roughness: 0.15,
    });
    const pillarGeo = new THREE.CylinderGeometry(0.1, 0.1, 4, 16);
    const pillar1 = new THREE.Mesh(pillarGeo, pillarMat);
    pillar1.position.set(-3.2, 2, 2.8);
    pillar1.castShadow = true;
    scene.add(pillar1);

    const pillar2 = pillar1.clone();
    pillar2.position.set(3.2, 2, 2.8);
    scene.add(pillar2);

    // Golden Roof Line & Details
    const beamGeo = new THREE.BoxGeometry(8.2, 0.15, 0.15);
    const beam = new THREE.Mesh(beamGeo, pillarMat);
    beam.position.set(0, 4, -0.5);
    scene.add(beam);

    // Pool & Water lounge
    const loungePoolGeo = new THREE.BoxGeometry(3, 0.1, 5);
    const loungePoolMat = new THREE.MeshStandardMaterial({
      color: 0x44bbff,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.85
    });
    const loungePool = new THREE.Mesh(loungePoolGeo, loungePoolMat);
    loungePool.position.set(3.2, 0.05, 3.5);
    scene.add(loungePool);

    // INTERIOR DECORATIVE LIGHTS (PointLights)
    const intLight1 = new THREE.PointLight(0xffb033, isNight ? 2 : 0.4, 6);
    intLight1.position.set(-1, 1.2, 1);
    scene.add(intLight1);

    const intLight2 = new THREE.PointLight(0xd4af37, isNight ? 2.5 : 0.6, 5);
    intLight2.position.set(2, 2.8, -0.5);
    scene.add(intLight2);

    interiorLightsRef.current = [intLight1, intLight2];

    // Glow meshes inside (represent golden glowing ceiling strips)
    const glowGeo = new THREE.BoxGeometry(3, 0.05, 0.05);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0xd4af37 });
    const ceilingStrip = new THREE.Mesh(glowGeo, glowMat);
    ceilingStrip.position.set(-1, 1.9, 1.5);
    scene.add(ceilingStrip);

    const ceilingStrip2 = ceilingStrip.clone();
    ceilingStrip2.position.set(2, 3.7, 0);
    scene.add(ceilingStrip2);

    // ANIMATE
    const clock = new THREE.Clock();
    let reqId: number;

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow dynamic wave-like pool ripple representation
      if (loungePool) {
        loungePool.position.y = 0.05 + Math.sin(elapsedTime * 2) * 0.01;
      }

      // Update OrbitControls
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(reqId);
      controls.dispose();
      renderer.dispose();
      if (mountRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        mountRef.current.innerHTML = "";
      }
    };
  }, [isNight, autoRotate]);

  // Handle Day/Night toggle
  const toggleNightMode = () => {
    setIsNight((prev) => {
      const newVal = !prev;
      // Also manually update current scene reference background/fog if initialized
      if (sceneRef.current) {
        sceneRef.current.background = new THREE.Color(newVal ? 0x07070a : 0x141419);
        sceneRef.current.fog = new THREE.FogExp2(newVal ? 0x07070a : 0x141419, 0.025);
      }
      return newVal;
    });
  };

  // Handle Room Selection Camera positioning
  const handleRoomSelect = (room: "exterior" | "living" | "master" | "pool") => {
    setActiveRoom(room);
    if (!cameraRef.current || !controlsRef.current) return;

    controlsRef.current.autoRotate = false;
    setAutoRotate(false);

    // Position targets and camera coordinates based on rooms
    switch (room) {
      case "exterior":
        cameraRef.current.position.set(11, 7, 11);
        controlsRef.current.target.set(0, 1.5, 0);
        break;
      case "living":
        cameraRef.current.position.set(-1.5, 1.5, 4.5);
        controlsRef.current.target.set(-1.5, 1, 0.5);
        break;
      case "master":
        cameraRef.current.position.set(2, 3.2, 2.5);
        controlsRef.current.target.set(1.5, 2.9, -0.5);
        break;
      case "pool":
        cameraRef.current.position.set(5.5, 1.5, 5.5);
        controlsRef.current.target.set(3.2, 0.5, 3.5);
        break;
    }
    controlsRef.current.update();
  };

  return (
    <div className="relative w-full h-[550px] md:h-[650px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#101010] to-[#07070a] border border-[#D4AF37]/15">
      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating HUD controls */}
      <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-4 items-center justify-between pointer-events-none">
        {/* Title */}
        <div className="glass-panel px-4 py-2.5 rounded-full pointer-events-auto flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="font-syne-luxury text-sm font-semibold tracking-wider uppercase text-gold text-xs">
            3D Studio Viewer
          </span>
          <span className="text-[#F5F5F5]/40 text-xs">|</span>
          <span className="text-xs text-[#F5F5F5]/80 font-medium truncate max-w-[120px] md:max-w-[180px]">
            {propertyName}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Day / Night Toggle */}
          <button
            onClick={toggleNightMode}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-black/50 border border-white/10 hover:border-gold hover:text-gold text-[#F5F5F5] transition-all backdrop-blur-md"
            title={isNight ? "Switch to Day View" : "Switch to Sunset/Night View"}
          >
            {isNight ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-400" />}
          </button>

          {/* Auto Rotation Toggle */}
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all backdrop-blur-md ${
              autoRotate
                ? "bg-[#D4AF37]/20 border-[#D4AF37] text-gold"
                : "bg-black/50 border-white/10 text-white/60 hover:border-gold hover:text-gold"
            }`}
            title="Toggle Auto Rotation"
          >
            <RotateCcw size={18} className={autoRotate ? "animate-spin" : ""} />
          </button>
        </div>
      </div>

      {/* Room Selector HUD (Bottom Center) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 md:gap-2.5 glass-panel p-1.5 rounded-full z-10">
        {[
          { key: "exterior", label: "Exterior View" },
          { key: "living", label: "Living Salon" },
          { key: "master", label: "Master Suite" },
          { key: "pool", label: "Infinity Pool" },
        ].map((room) => (
          <button
            key={room.key}
            onClick={() => handleRoomSelect(room.key as any)}
            className={`px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider transition-all ${
              activeRoom === room.key
                ? "bg-gold text-black font-bold shadow-lg shadow-[#D4AF37]/20"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            {room.label}
          </button>
        ))}
      </div>

      {/* Floating Specs HUD (Bottom Left) */}
      <div className="absolute bottom-6 left-6 hidden lg:flex flex-col gap-2 pointer-events-none">
        <div className="glass-panel px-4 py-3 rounded-2xl flex flex-col gap-1.5 max-w-[200px]">
          <div className="flex items-center gap-2 text-gold">
            <ShieldCheck size={14} />
            <span className="text-[10px] font-bold uppercase tracking-wider font-syne-luxury">Smart Security</span>
          </div>
          <span className="text-xs text-white/80">Biometric & Encrypted</span>
        </div>

        <div className="glass-panel px-4 py-3 rounded-2xl flex flex-col gap-1.5 max-w-[200px]">
          <div className="flex items-center gap-2 text-gold">
            <Zap size={14} />
            <span className="text-[10px] font-bold uppercase tracking-wider font-syne-luxury">Sustain Power</span>
          </div>
          <span className="text-xs text-white/80">Tesla Powerwall Integrated</span>
        </div>
      </div>

      {/* Drag Instruction HUD (Bottom Right) */}
      <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 glass-panel px-4 py-2.5 rounded-full pointer-events-none text-white/50 text-[10px] uppercase tracking-wider font-bold">
        <Eye size={12} className="text-gold" />
        <span>Drag to Rotate • Scroll to Zoom</span>
      </div>
    </div>
  );
}

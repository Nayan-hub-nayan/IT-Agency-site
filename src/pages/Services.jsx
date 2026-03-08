import React from 'react';
import ServiceHero from '../components/ServiceHero';
import ServiceDepartment from '../components/ServiceDepartment';

const Services = () => {
  const departments = [
    {
      id: '01',
      name: 'UI/UX_CORE',
      line1: 'INITIALIZING_NEURAL_INTERFACE',
      line2: 'ARCHITECTING_BEHAVIORAL_PATHWAYS',
      line3: 'DEPLOYING_INTUITIVE_ECOSYSTEMS',
      color: 'primary',
      subColor: 'neon-green',
      features: [
        { title: 'Visual Synthesis', desc: 'High-fidelity interface design systems built for massive scale and extreme performance.' },
        { title: 'Motion Matrix', desc: 'Fluid-state transitions and micro-interactions powered by custom animation engines.' }
      ],
      stack: ['REACT_OS', 'THREE_JS', 'GSAP_CORE'],
      reverse: false
    },
    {
      id: '02',
      name: 'AI_SYNAPSE',
      line1: 'INFUSING_COGNITIVE_REASONING',
      line2: 'DEPLOYING_NEURAL_MESH',
      line3: 'SYNCHRONIZING_API_CLUSTERS',
      color: 'accent',
      subColor: 'accent',
      features: [
        { title: 'Neural Architectures', desc: 'Custom LLM implementation and vector database orchestration for enterprise-grade reasoning.' },
        { title: 'Cognitive Automata', desc: 'Autonomous agent deployment for high-complexity decision loops and workflow optimization.' }
      ],
      stack: ['OPEN_AI', 'PINECONE', 'LANGCHAIN'],
      reverse: true
    },
    {
      id: '03',
      name: 'CYBER_SHIELD',
      line1: 'ENFORCING_ZERO_TRUST',
      line2: 'ACTIVATING_THREAT_ISOLATION',
      line3: 'ENCRYPTING_DATA_STRATA',
      color: 'neon-green',
      subColor: 'neon-green',
      features: [
        { title: 'Pentesting', desc: 'Continuous vulnerability scanning and exploit identification for hardened systems.' },
        { title: 'Sentinel Response', desc: 'Real-time threat detection and automated mitigation protocols.' }
      ],
      stack: ['AES_512', 'ZERO_TRUST', 'KUBERNETES'],
      reverse: false
    }
  ];

  return (
    <div className="min-h-screen bg-background-dark pb-32 pt-32">
      <ServiceHero />
      <div className="flex flex-col">
        {departments.map((dept) => (
          <ServiceDepartment key={dept.id} {...dept} />
        ))}
      </div>
    </div>
  );
};

export default Services;

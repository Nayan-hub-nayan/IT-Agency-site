import React from 'react';
import TeamMemberSection from '../components/TeamMemberSection';
import JoinElite from '../components/JoinElite';

const Team = () => {
  const members = [
    {
      name: 'Yelena.',
      role: 'Architecture',
      node: '001',
      level: 'Core',
      desc: 'Mastermind behind hyper-logic systems and digital ecosystems. Defining the future of interaction through algorithmic precision.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvX-STNWN6tzRpPB3Zg_aXyq3PW5hr6XLPAHwVLAX5IhbIXjkrWP43Z-TRD5mu2PipC3OV5zUMoETFOFH1yYGdPVo-RoTywVWtw1WI1xelhM6VRSIMwA4Si__7fCH1BNi_yUDxhoY5LXHTHJNUqUzgLWhD8tupgHE9z4Dz7XxeYpLEcBEo2YNjSZgt7kyUNKBwVON13GYIJ-6ZnOyH-nHtwwHF6hzZ5-ETInYCj4CSmtqZKT7qnA8osOAxsjNbWaAd9hmPkjMQvBuo',
      color: 'primary'
    },
    {
      name: 'Marcus.',
      role: 'Engineering',
      node: '082',
      level: 'Elite',
      desc: 'Deploying scalable neural infrastructures and high-frequency trading protocols with zero latency tolerance.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7Gjxo06ov4EtyhtbaSo1ldyLBVJLgcJ5iXuQIodn-kBMgWFOlo9MoudRoATHb-xKSLD-kGrbEgknHAfeBjPfWJyEmJG6Sm1_7tD-o02CV4KlCqYwfp6O8XwsoQ4RkdnjGneYRAkzpTXXoPpYVsf4IqHv5SifMiyT9AJTtdtOhmblDeyUQL7Qb0SWRmJwPbqSWMk-R2KBAdXDUXgXLuhBgXbXBQRW_rxqGRYeS45bUKWb9VdXAjEeNjjJ4BX7gjz1YXJfehV16CfMZ',
      color: 'white'
    }
  ];

  return (
    <div className="min-h-screen bg-background-dark">
      {members.map((member, i) => (
        <TeamMemberSection key={i} {...member} reverse={i % 2 !== 0} />
      ))}
      <JoinElite />
      
      {/* Side Borders */}
      <div className="fixed left-6 md:left-12 top-0 h-full w-[1px] bg-white/5 pointer-events-none z-10"></div>
      <div className="fixed right-6 md:right-12 top-0 h-full w-[1px] bg-white/5 pointer-events-none z-10"></div>
    </div>
  );
};

export default Team;

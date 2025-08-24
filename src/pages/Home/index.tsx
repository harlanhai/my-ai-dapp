import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Briefcase, Sparkles, Users } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-blue-400" />,
      title: 'Agent 管理',
      description: '创建、配置和管理各种类型的智能代理，支持多种AI模型和自定义功能',
      link: '/agents',
      gradient: 'from-blue-500/10 to-cyan-500/10',
      border: 'border-blue-500/20',
      hover: 'hover:border-blue-500/40'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-400" />,
      title: 'Job 管理',
      description: '创建、调度和监控各种任务执行，支持自动化工作流程',
      link: '/jobs',
      gradient: 'from-purple-500/10 to-pink-500/10',
      border: 'border-purple-500/20',
      hover: 'hover:border-purple-500/40'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
      title: 'AI 增强',
      description: '集成最新AI技术，提供智能化解决方案和自动化建议',
      link: '/ai',
      gradient: 'from-yellow-500/10 to-orange-500/10',
      border: 'border-yellow-500/20',
      hover: 'hover:border-yellow-500/40'
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: '团队协作',
      description: '支持多用户协作，共享Agent和Job，提升团队工作效率',
      link: '/team',
      gradient: 'from-green-500/10 to-teal-500/10',
      border: 'border-green-500/20',
      hover: 'hover:border-green-500/40'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8 shadow-lg">
            <Bot className="w-10 h-10 text-white" />
          </div>
          <h1 className="py-2 text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            欢迎使用 AI Agents
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            下一代智能代理管理平台，让AI为你的工作流程赋能
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/agents"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Bot className="w-5 h-5 mr-2" />
              开始创建Agent
            </Link>
            <Link
              to="/jobs"
              className="inline-flex items-center px-8 py-4 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white font-semibold rounded-lg border border-gray-600 hover:border-gray-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              管理任务
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">功能概览</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            探索AgentFlow的强大功能，让智能代理为您的业务流程提供全方位支持
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-6 bg-gradient-to-br ${feature.gradient} backdrop-blur-sm rounded-xl border ${feature.border} ${feature.hover} shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold ml-3 text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                >
                  了解更多
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">活跃Agent</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">1,200+</div>
              <div className="text-gray-300">完成任务</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-300">成功率</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React,{useState} from 'react'
import { BookOpen, Users, Clock, Shield, Award, CheckCircle, GraduationCap,Mail,Github, } from 'lucide-react';
import { FaTelegram } from "react-icons/fa";
import FeatureCard from './FeatureCard';
import StatCard from './StatCard';
import { Link } from 'react-router-dom';
import LearnMoreModal from './LearnMoreModal';

const About = ({isDisplayBtn}) => {

  const [showModal,setShowModal] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pl-0 sm:pl-45 pt-18">
    {/* Hero Section */}
    <div className="relative py-24">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
          alt="Students studying"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <GraduationCap className="w-16 h-16 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            Transforming Education Through Digital Excellence
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Your trusted platform for secure, efficient, and comprehensive online examinations
          </p>
          <div className="flex items-center gap-4 justify-center">
            {
              isDisplayBtn ?   <Link to='/' className="px-8 py-2.5 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-xl text-sm">
                                  Get Started
                               </Link>
                           : ''
            }
            <button onClick={() => setShowModal(prev => !prev)} className="px-8 py-2.5 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-colors border border-indigo-200 shadow-sm hover:shadow-xl cursor-pointer text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>

{/* Learn More Modal */}

    {showModal ? <LearnMoreModal setShowModal={setShowModal} /> : null}

    {/* Features Grid */}
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Why Choose Our Platform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-indigo-600" />}
            title="Secure Testing Environment"
            description="Advanced proctoring and anti-cheating measures ensure examination integrity"
          />
          <FeatureCard
            icon={<Clock className="w-8 h-8 text-indigo-600" />}
            title="Flexible Scheduling"
            description="Take exams at your convenience with 24/7 availability"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-indigo-600" />}
            title="Multi-User Support"
            description="Seamless experience for students, teachers, and administrators"
          />
          <FeatureCard
            icon={<BookOpen className="w-8 h-8 text-indigo-600" />}
            title="Diverse Question Types"
            description="Support for multiple choice, essay, coding, and more"
          />
          <FeatureCard
            icon={<CheckCircle className="w-8 h-8 text-indigo-600" />}
            title="Instant Results"
            description="Automated grading with detailed performance analytics"
          />
          <FeatureCard
            icon={<Award className="w-8 h-8 text-indigo-600" />}
            title="Certified Assessments"
            description="Industry-recognized certification and verification"
          />
        </div>
      </div>
    </div>

    {/* Statistics Section */}
    <div className="py-24 bg-gradient-to-br from-indigo-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <StatCard number="100,000+" label="Students Served" />
          <StatCard number="5,000+" label="Exams Conducted" />
          <StatCard number="98%" label="Satisfaction Rate" />
        </div>
      </div>
    </div>

    
  {/* About Developer Section */}
  <div className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12 shadow-xl">
            <div className="flex flex-col items-center">
              <img
                src="pic.png"
                alt="Developer Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl mb-6"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                About the Developer
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed text-center mb-8">
                Hello! I'm a passionate Software Engineering student at ASTU University, specializing in full-stack development. 
                This online examination platform represents my commitment to improving educational technology and making assessment 
                processes more efficient and accessible.
              </p>
              <div className="flex gap-6 justify-center">
                <a href=" https://daveeasycoder.github.io/my-portfolio/" target='_blank' className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <Github className="w-6 h-6 text-gray-700" />
                </a>
                <a href="https://t.me/davetechguru" target='_blank' className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <FaTelegram className="w-6 h-6 text-gray-700" />
                </a>
                <a href="mailto:dawittechguru@gmail.com" target='_blank' className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <Mail className="w-6 h-6 text-gray-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


  
  </div>
  )
}

export default About
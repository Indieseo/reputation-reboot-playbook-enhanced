import React, { useState } from 'react';
import { SlideLayout } from './SlideLayout';
import { Users, Clock, CheckCircle, AlertCircle, Mail, Calendar, Target, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';

interface Task {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  estimatedHours: number;
  assignedTo: string;
  dependencies: string;
  status: 'pending' | 'in-progress' | 'completed' | 'blocked';
  phase: number;
  team: 'data' | 'automations' | 'growth';
}

interface Team {
  name: string;
  color: string;
  icon: React.ReactNode;
  tasks: Task[];
  totalHours: number;
}

export const DivisionOfLaborSlide = ({ isPresenting }: { isPresenting?: boolean }) => {
  const [selectedTeam, setSelectedTeam] = useState<'data' | 'automations' | 'growth'>('data');
  const [editingTask, setEditingTask] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState<string>('');

  const teams: Team[] = [
    {
      name: 'Data Team',
      color: 'blue',
      icon: <TrendingUp className="w-5 h-5" />,
      totalHours: 192,
      tasks: [
        {
          id: 'data-1',
          title: 'Metabase Account Access & Permissions',
          description: 'Establish secure access to internal Metabase account for Slide 10 integration',
          deliverables: ['API authentication setup', 'Dashboard permissions configuration', 'User access management'],
          estimatedHours: 8,
          assignedTo: '[Enter Email Address]',
          dependencies: 'IT Security approval',
          status: 'pending',
          phase: 1,
          team: 'data'
        },
        {
          id: 'data-2',
          title: 'Data Source Audit & Mapping',
          description: 'Audit existing Metabase dashboards and identify required data sources',
          deliverables: ['Inventory of existing SEO dashboards', 'Mapping of required metrics', 'Data quality assessment'],
          estimatedHours: 16,
          assignedTo: '[Enter Email Address]',
          dependencies: 'Metabase access',
          status: 'pending',
          phase: 1,
          team: 'data'
        },
        {
          id: 'data-3',
          title: 'Regional Data Structure Design',
          description: 'Design data structure for regional performance tracking',
          deliverables: ['Regional data schema design', 'Country-specific metric definitions', 'YOY comparison structure'],
          estimatedHours: 12,
          assignedTo: '[Enter Email Address]',
          dependencies: 'Business requirements',
          status: 'pending',
          phase: 1,
          team: 'data'
        },
        {
          id: 'data-4',
          title: 'Metabase API Integration Layer',
          description: 'Build API integration layer to connect Slide 10 with Metabase',
          deliverables: ['Metabase API service implementation', 'Authentication management', 'Error handling'],
          estimatedHours: 20,
          assignedTo: '[Enter Email Address]',
          dependencies: 'Metabase access and permissions',
          status: 'pending',
          phase: 2,
          team: 'data'
        }
      ]
    },
    {
      name: 'Automations Team',
      color: 'green',
      icon: <Target className="w-5 h-5" />,
      totalHours: 116,
      tasks: [
        {
          id: 'auto-1',
          title: 'Metabase API Automation Framework',
          description: 'Build automation framework for Metabase API interactions',
          deliverables: ['API automation scripts', 'Scheduled data refresh', 'Error handling automation'],
          estimatedHours: 16,
          assignedTo: '[Enter Email Address]',
          dependencies: 'Metabase API access',
          status: 'pending',
          phase: 1,
          team: 'automations'
        },
        {
          id: 'auto-2',
          title: 'Data Refresh Automation',
          description: 'Implement automated data refresh schedules for real-time updates',
          deliverables: ['Automated refresh scheduling', 'Data freshness monitoring', 'Alert system'],
          estimatedHours: 12,
          assignedTo: '[Enter Email Address]',
          dependencies: 'Data infrastructure setup',
          status: 'pending',
          phase: 1,
          team: 'automations'
        },
        {
          id: 'auto-3',
          title: 'Executive Report Automation',
          description: 'Build automated weekly and monthly executive report generation',
          deliverables: ['Automated report generation', 'Dashboard refresh automation', 'Report distribution'],
          estimatedHours: 18,
          assignedTo: '[Enter Email Address]',
          dependencies: 'Data integration completion',
          status: 'pending',
          phase: 2,
          team: 'automations'
        }
      ]
    },
    {
      name: 'Growth Team',
      color: 'purple',
      icon: <Users className="w-5 h-5" />,
      totalHours: 122,
      tasks: [
        {
          id: 'growth-1',
          title: 'Executive Dashboard Design',
          description: 'Design user experience and interface for executive-level dashboard',
          deliverables: ['Executive dashboard wireframes', 'User experience flow', 'C-level presentation format'],
          estimatedHours: 16,
          assignedTo: '[Enter Email Address]',
          dependencies: 'Business requirements gathering',
          status: 'pending',
          phase: 1,
          team: 'growth'
        },
        {
          id: 'growth-2',
          title: 'Regional Analysis Framework',
          description: 'Define business requirements for regional performance analysis',
          deliverables: ['Regional analysis requirements', 'Geographic market definitions', 'Regional KPI specifications'],
          estimatedHours: 12,
          assignedTo: '[Enter Email Address]',
          dependencies: 'Market research',
          status: 'pending',
          phase: 1,
          team: 'growth'
        },
        {
          id: 'growth-3',
          title: 'Executive Training Program',
          description: 'Develop training program for executive users of the new dashboard',
          deliverables: ['Executive training materials', 'User guide documentation', 'Training session planning'],
          estimatedHours: 12,
          assignedTo: '[Enter Email Address]',
          dependencies: 'Dashboard completion',
          status: 'pending',
          phase: 3,
          team: 'growth'
        }
      ]
    }
  ];

  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'blocked':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'blocked':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTeamColor = (team: string) => {
    switch (team) {
      case 'data':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'automations':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'growth':
        return 'bg-purple-50 border-purple-200 text-purple-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const handleEmailAssignment = (taskId: string) => {
    if (emailInput && emailInput.includes('@')) {
      // Update task assignment
      setEmailInput('');
      setEditingTask(null);
    }
  };

  const selectedTeamData = teams.find(team => team.name.toLowerCase().includes(selectedTeam));

  return (
    <SlideLayout
      title="Division of Labor Plan"
      subtitle="Slide 10 Enhancement Project - 6 Week Implementation"
      isPresenting={isPresenting}
    >
      <div className="space-y-6">
        {/* Project Overview */}
        <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-gradient-primary'} p-6 rounded-lg`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-bold`}>6</div>
              <div className={`${isPresenting ? 'text-sm' : 'text-sm'} opacity-80`}>Weeks</div>
            </div>
            <div>
              <div className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-bold`}>3</div>
              <div className={`${isPresenting ? 'text-sm' : 'text-sm'} opacity-80`}>Teams</div>
            </div>
            <div>
              <div className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-bold`}>29</div>
              <div className={`${isPresenting ? 'text-sm' : 'text-sm'} opacity-80`}>Tasks</div>
            </div>
            <div>
              <div className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-bold`}>430</div>
              <div className={`${isPresenting ? 'text-sm' : 'text-sm'} opacity-80`}>Hours</div>
            </div>
          </div>
        </div>

        {/* Team Selection */}
        <div className="flex space-x-2 justify-center">
          {teams.map((team) => (
            <Button
              key={team.name}
              variant={selectedTeam === team.name.toLowerCase().split(' ')[0] ? 'default' : 'outline'}
              onClick={() => setSelectedTeam(team.name.toLowerCase().split(' ')[0] as any)}
              className="flex items-center space-x-2"
            >
              {team.icon}
              <span>{team.name}</span>
              <Badge variant="secondary">{team.tasks.length} tasks</Badge>
            </Button>
          ))}
        </div>

        {/* Selected Team Tasks */}
        {selectedTeamData && (
          <div className="space-y-4">
            <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-4 rounded-lg`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {selectedTeamData.icon}
                  <h3 className={`${isPresenting ? 'text-xl' : 'text-xl'} font-bold`}>
                    {selectedTeamData.name}
                  </h3>
                  <Badge className={getTeamColor(selectedTeamData.name.toLowerCase().split(' ')[0])}>
                    {selectedTeamData.totalHours}h total
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                {selectedTeamData.tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`${isPresenting ? 'bg-card/20 backdrop-blur-sm' : 'bg-muted/50'} p-4 rounded-lg border`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {getStatusIcon(task.status)}
                          <h4 className={`${isPresenting ? 'text-primary-foreground' : 'text-foreground'} font-semibold`}>
                            {task.title}
                          </h4>
                          <Badge className={getStatusColor(task.status)}>
                            {task.status.replace('-', ' ')}
                          </Badge>
                        </div>
                        <p className={`${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'} text-sm mb-3`}>
                          {task.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <strong className={isPresenting ? 'text-primary-foreground' : 'text-foreground'}>Deliverables:</strong>
                            <ul className={`${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'} list-disc list-inside mt-1`}>
                              {task.deliverables.map((deliverable, index) => (
                                <li key={index}>{deliverable}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <strong className={isPresenting ? 'text-primary-foreground' : 'text-foreground'}>Estimated Hours:</strong>
                              <span className={`${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'} ml-2`}>
                                {task.estimatedHours}h
                              </span>
                            </div>
                            <div>
                              <strong className={isPresenting ? 'text-primary-foreground' : 'text-foreground'}>Dependencies:</strong>
                              <span className={`${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'} ml-2`}>
                                {task.dependencies}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Email Assignment */}
                    <div className="flex items-center space-x-2 pt-3 border-t border-border/50">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className={`${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'} text-sm`}>
                        Assigned to:
                      </span>
                      {editingTask === task.id ? (
                        <div className="flex items-center space-x-2">
                          <Input
                            type="email"
                            placeholder="Enter email address"
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            className="w-48"
                          />
                          <Button size="sm" onClick={() => handleEmailAssignment(task.id)}>
                            Assign
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => setEditingTask(null)}>
                            Cancel
                          </Button>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span className={`${isPresenting ? 'text-primary-foreground' : 'text-foreground'} text-sm`}>
                            {task.assignedTo}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingTask(task.id)}
                          >
                            Edit
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Project Milestones */}
        <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-6 rounded-lg`}>
          <h3 className={`${isPresenting ? 'text-xl' : 'text-xl'} font-bold mb-4 flex items-center space-x-2`}>
            <Calendar className="w-5 h-5" />
            <span>Project Milestones</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`${isPresenting ? 'bg-accent/20' : 'bg-warning/10'} p-4 rounded-lg border border-warning/20`}>
              <h4 className="font-semibold mb-2">Week 2: Foundation Complete</h4>
              <ul className={`${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'} text-sm space-y-1`}>
                <li>• Metabase access established</li>
                <li>• Data structure designed</li>
                <li>• Automation framework built</li>
                <li>• Business requirements finalized</li>
              </ul>
            </div>
            <div className={`${isPresenting ? 'bg-accent/20' : 'bg-primary/10'} p-4 rounded-lg border border-primary/20`}>
              <h4 className="font-semibold mb-2">Week 4: Integration Complete</h4>
              <ul className={`${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'} text-sm space-y-1`}>
                <li>• API integration functional</li>
                <li>• Real-time data pipeline operational</li>
                <li>• Regional analysis working</li>
                <li>• Executive dashboard designed</li>
              </ul>
            </div>
            <div className={`${isPresenting ? 'bg-accent/20' : 'bg-success/10'} p-4 rounded-lg border border-success/20`}>
              <h4 className="font-semibold mb-2">Week 6: Full Deployment</h4>
              <ul className={`${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'} text-sm space-y-1`}>
                <li>• All systems operational</li>
                <li>• Executive training completed</li>
                <li>• Performance monitoring active</li>
                <li>• Change management implemented</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

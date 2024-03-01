import { Colors } from './colors';

export enum Stack {
  // Languages
  java,
  typescript,
  javascript,
  python,
  rust,

  // Frontend
  react,
  nextjs,

  // Backend
  spring,
  node,
  flask,

  // Cloud
  aws,

  // Messaging
  kafka,

  // Databases
  cassandra,
  redis,
  postgres,
  mongo,

  // Tools
  docker,
  kubernetes,
  terraform,
}

export const WorkStack = [
  Stack.java,
  Stack.typescript,
  Stack.python,
  Stack.rust,
  Stack.react,
  Stack.aws,
  Stack.kubernetes,
  Stack.docker,
  Stack.terraform,
  Stack.kafka,
  Stack.spring,
  Stack.postgres,
  Stack.redis,
  Stack.cassandra
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
[Stack.nextjs]: {
  value: 'Next.js',
  color: Colors.nextjs,
},
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.kafka]: {
    value: 'Kafka',
    color: Colors.kafka,
  },

  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.kubernetes]: {
    value: 'Kubernetes',
    color: Colors.kubernetes,
  },
  [Stack.terraform]: {
    value: 'Terraform',
    color: Colors.terraform,
  },
  [Stack.java]: {
    value: '',
    color: ''
  },
  [Stack.rust]: {
    value: '',
    color: ''
  },
  [Stack.spring]: {
    value: '',
    color: ''
  },
  [Stack.flask]: {
    value: '',
    color: ''
  },
  [Stack.cassandra]: {
    value: '',
    color: ''
  }
};

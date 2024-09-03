import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CrossCircledIcon,
  EnvelopeClosedIcon,
  Pencil1Icon,
  PlusIcon,
} from '@radix-ui/react-icons';
import { BackpackIcon } from 'lucide-react';

export const labels = [
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'documentation',
    label: 'Documentation',
  },
];

export const statuses = [
  {
    value: 'interviewing',
    label: 'Interviewing',
    icon: BackpackIcon,
  },
  {
    value: 'applied',
    label: 'Applied',
    icon: Pencil1Icon,
  },
  {
    value: 'offer',
    label: 'Offer',
    icon: EnvelopeClosedIcon,
  },
  {
    value: 'rejected',
    label: 'Rejected',
    icon: CrossCircledIcon,
  },
  {
    value: 'other',
    label: 'Other',
    icon: PlusIcon,
  },
];

export const priorities = [
  {
    label: 'Low',
    value: 'low',
    icon: ArrowDownIcon,
  },
  {
    label: 'Medium',
    value: 'medium',
    icon: ArrowRightIcon,
  },
  {
    label: 'High',
    value: 'high',
    icon: ArrowUpIcon,
  },
];

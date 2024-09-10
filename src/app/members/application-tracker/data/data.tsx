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

export const statuses = [
  {
    value: 'Interviewing',
    label: 'Interviewing',
    icon: BackpackIcon,
  },
  {
    value: 'Applied',
    label: 'Applied',
    icon: Pencil1Icon,
  },
  {
    value: 'Offer',
    label: 'Offer',
    icon: EnvelopeClosedIcon,
  },
  {
    value: 'Rejected',
    label: 'Rejected',
    icon: CrossCircledIcon,
  },
  {
    value: 'Other',
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

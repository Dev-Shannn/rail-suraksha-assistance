export interface Train {
  trainNo: string;
  trainName: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  days: string[];
  classes: {
    type: string;
    name: string;
    price: number;
    available: number;
    description: string;
  }[];
  rating: number;
  reviews: number;
}

export const trainsData: Train[] = [
  {
    trainNo: '12951',
    trainName: 'Mumbai Rajdhani Express',
    from: 'New Delhi',
    to: 'Mumbai Central',
    departure: '16:55',
    arrival: '08:35+1',
    duration: '15h 40m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 4565, available: 12, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 2450, available: 28, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1740, available: 45, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 585, available: 156, description: 'Non-AC sleeper berths' }
    ],
    rating: 4.2,
    reviews: 1250
  },
  {
    trainNo: '12953',
    trainName: 'August Kranti Rajdhani',
    from: 'New Delhi',
    to: 'Mumbai Central',
    departure: '17:20',
    arrival: '09:10+1',
    duration: '15h 50m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 4565, available: 8, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 2450, available: 15, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1740, available: 32, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 585, available: 89, description: 'Non-AC sleeper berths' }
    ],
    rating: 4.1,
    reviews: 980
  },
  {
    trainNo: '12621',
    trainName: 'Tamil Nadu Express',
    from: 'New Delhi',
    to: 'Chennai Central',
    departure: '22:30',
    arrival: '04:45+2',
    duration: '30h 15m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 3890, available: 6, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 2180, available: 22, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1560, available: 67, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 520, available: 234, description: 'Non-AC sleeper berths' }
    ],
    rating: 4.0,
    reviews: 2100
  },
  {
    trainNo: '12840',
    trainName: 'Howrah Mail',
    from: 'Chennai Central',
    to: 'Howrah',
    departure: '23:05',
    arrival: '06:15+2',
    duration: '31h 10m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 4120, available: 4, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 2340, available: 18, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1680, available: 45, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 560, available: 189, description: 'Non-AC sleeper berths' }
    ],
    rating: 3.9,
    reviews: 1560
  },
  {
    trainNo: '12002',
    trainName: 'Bhopal Shatabdi',
    from: 'New Delhi',
    to: 'Bhopal',
    departure: '06:00',
    arrival: '13:55',
    duration: '7h 55m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: 'CC', name: 'Chair Car', price: 890, available: 45, description: 'AC Chair Car' },
      { type: 'EC', name: 'Executive Chair', price: 1680, available: 12, description: 'Premium Chair Car' }
    ],
    rating: 4.3,
    reviews: 890
  },
  {
    trainNo: '12626',
    trainName: 'Kerala Express',
    from: 'New Delhi',
    to: 'Thiruvananthapuram',
    departure: '11:45',
    arrival: '11:05+2',
    duration: '47h 20m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 5670, available: 8, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 3120, available: 24, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 2240, available: 56, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 750, available: 198, description: 'Non-AC sleeper berths' }
    ],
    rating: 4.1,
    reviews: 1780
  },
  {
    trainNo: '12650',
    trainName: 'Karnataka Sampark Kranti',
    from: 'New Delhi',
    to: 'Bangalore',
    departure: '20:20',
    arrival: '04:00+2',
    duration: '31h 40m',
    days: ['Mon', 'Wed', 'Fri'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 4890, available: 6, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 2780, available: 20, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1980, available: 48, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 660, available: 167, description: 'Non-AC sleeper berths' }
    ],
    rating: 4.0,
    reviews: 1340
  },
  {
    trainNo: '12424',
    trainName: 'Dibrugarh Rajdhani',
    from: 'New Delhi',
    to: 'Dibrugarh',
    departure: '21:35',
    arrival: '18:30+2',
    duration: '44h 55m',
    days: ['Tue', 'Fri', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 6780, available: 4, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 3890, available: 16, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 2780, available: 38, description: 'Standard AC accommodation' }
    ],
    rating: 4.2,
    reviews: 890
  },
  {
    trainNo: '12019',
    trainName: 'Dehradun Shatabdi',
    from: 'New Delhi',
    to: 'Dehradun',
    departure: '06:50',
    arrival: '12:35',
    duration: '5h 45m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: 'CC', name: 'Chair Car', price: 560, available: 67, description: 'AC Chair Car' },
      { type: 'EC', name: 'Executive Chair', price: 1120, available: 18, description: 'Premium Chair Car' }
    ],
    rating: 4.4,
    reviews: 1120
  },
  {
    trainNo: '12301',
    trainName: 'Howrah Rajdhani',
    from: 'New Delhi',
    to: 'Howrah',
    departure: '16:55',
    arrival: '10:05+1',
    duration: '17h 10m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 4120, available: 10, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 2340, available: 26, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1680, available: 52, description: 'Standard AC accommodation' }
    ],
    rating: 4.3,
    reviews: 1890
  },
  {
    trainNo: '12615',
    trainName: 'Grand Trunk Express',
    from: 'Chennai Central',
    to: 'New Delhi',
    departure: '19:15',
    arrival: '05:30+2',
    duration: '34h 15m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 3890, available: 8, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 2180, available: 24, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1560, available: 58, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 520, available: 201, description: 'Non-AC sleeper berths' }
    ],
    rating: 3.8,
    reviews: 1670
  },
  {
    trainNo: '12009',
    trainName: 'Shatabdi Express',
    from: 'New Delhi',
    to: 'Amritsar',
    departure: '07:20',
    arrival: '13:25',
    duration: '6h 05m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: 'CC', name: 'Chair Car', price: 670, available: 56, description: 'AC Chair Car' },
      { type: 'EC', name: 'Executive Chair', price: 1340, available: 14, description: 'Premium Chair Car' }
    ],
    rating: 4.2,
    reviews: 980
  },
  {
    trainNo: '12723',
    trainName: 'Telangana Express',
    from: 'New Delhi',
    to: 'Hyderabad',
    departure: '21:05',
    arrival: '06:00+2',
    duration: '32h 55m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 4560, available: 6, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 2560, available: 22, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1840, available: 48, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 615, available: 178, description: 'Non-AC sleeper berths' }
    ],
    rating: 4.0,
    reviews: 1450
  },
  {
    trainNo: '12925',
    trainName: 'Paschim Express',
    from: 'Amritsar',
    to: 'Mumbai Central',
    departure: '15:50',
    arrival: '17:15+1',
    duration: '25h 25m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 3890, available: 8, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 2180, available: 26, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1560, available: 54, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 520, available: 189, description: 'Non-AC sleeper berths' }
    ],
    rating: 3.9,
    reviews: 1230
  },
  {
    trainNo: '12869',
    trainName: 'Csmt Hazur Sahib Express',
    from: 'Mumbai CSMT',
    to: 'Nanded',
    departure: '21:25',
    arrival: '11:40+1',
    duration: '14h 15m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 2890, available: 4, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 1680, available: 18, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1240, available: 42, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 420, available: 156, description: 'Non-AC sleeper berths' }
    ],
    rating: 4.1,
    reviews: 890
  },
  {
    trainNo: '12431',
    trainName: 'Trivandrum Rajdhani',
    from: 'New Delhi',
    to: 'Trivandrum Central',
    departure: '11:45',
    arrival: '11:05+2',
    duration: '47h 20m',
    days: ['Tue', 'Fri'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 5670, available: 6, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 3120, available: 20, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 2240, available: 44, description: 'Standard AC accommodation' }
    ],
    rating: 4.2,
    reviews: 1120
  },
  {
    trainNo: '12555',
    trainName: 'Gorakhdham Express',
    from: 'Hisar',
    to: 'Gorakhpur',
    departure: '23:35',
    arrival: '14:30+1',
    duration: '14h 55m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 2890, available: 6, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 1680, available: 22, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1240, available: 48, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 420, available: 167, description: 'Non-AC sleeper berths' }
    ],
    rating: 3.8,
    reviews: 780
  },
  {
    trainNo: '12780',
    trainName: 'Goa Express',
    from: 'New Delhi',
    to: 'Vasco Da Gama',
    departure: '15:00',
    arrival: '09:50+2',
    duration: '42h 50m',
    days: ['Mon', 'Thu'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 5120, available: 4, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 2890, available: 18, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 2080, available: 38, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 695, available: 134, description: 'Non-AC sleeper berths' }
    ],
    rating: 4.0,
    reviews: 1340
  },
  {
    trainNo: '12617',
    trainName: 'Mangala Lakshadweep Express',
    from: 'New Delhi',
    to: 'Ernakulam',
    departure: '21:10',
    arrival: '04:30+2',
    duration: '31h 20m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 4890, available: 8, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 2780, available: 24, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1980, available: 52, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 660, available: 189, description: 'Non-AC sleeper berths' }
    ],
    rating: 4.1,
    reviews: 1560
  },
  {
    trainNo: '12449',
    trainName: 'Goa Sampark Kranti',
    from: 'New Delhi',
    to: 'Madgaon',
    departure: '11:00',
    arrival: '12:15+1',
    duration: '25h 15m',
    days: ['Wed', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 4120, available: 6, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 2340, available: 20, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1680, available: 44, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 560, available: 156, description: 'Non-AC sleeper berths' }
    ],
    rating: 3.9,
    reviews: 1120
  },
  {
    trainNo: '12801',
    trainName: 'Purushottam Express',
    from: 'New Delhi',
    to: 'Puri',
    departure: '14:45',
    arrival: '15:45+1',
    duration: '25h 00m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 3890, available: 8, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 2180, available: 26, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1560, available: 56, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 520, available: 198, description: 'Non-AC sleeper berths' }
    ],
    rating: 4.0,
    reviews: 1450
  },
  {
    trainNo: '12875',
    trainName: 'Neelachal Express',
    from: 'New Delhi',
    to: 'Puri',
    departure: '06:50',
    arrival: '06:00+1',
    duration: '23h 10m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 3670, available: 6, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 2080, available: 22, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1490, available: 48, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 495, available: 167, description: 'Non-AC sleeper berths' }
    ],
    rating: 3.8,
    reviews: 1230
  },
  {
    trainNo: '12643',
    trainName: 'Kanyakumari Express',
    from: 'New Delhi',
    to: 'Kanyakumari',
    departure: '11:45',
    arrival: '22:15+2',
    duration: '58h 30m',
    days: ['Thu'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 6780, available: 4, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 3890, available: 16, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 2780, available: 34, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 930, available: 123, description: 'Non-AC sleeper berths' }
    ],
    rating: 4.1,
    reviews: 890
  },
  {
    trainNo: '12807',
    trainName: 'Samta Express',
    from: 'New Delhi',
    to: 'Darbhanga',
    departure: '21:25',
    arrival: '14:40+1',
    duration: '17h 15m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 3120, available: 6, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 1780, available: 20, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1280, available: 44, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 425, available: 156, description: 'Non-AC sleeper berths' }
    ],
    rating: 3.9,
    reviews: 1120
  },
  {
    trainNo: '12889',
    trainName: 'Tatanagar Express',
    from: 'Pune',
    to: 'Tatanagar',
    departure: '05:40',
    arrival: '11:30+1',
    duration: '29h 50m',
    days: ['Mon', 'Wed', 'Fri'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 4340, available: 4, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 2450, available: 18, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1750, available: 38, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 585, available: 134, description: 'Non-AC sleeper berths' }
    ],
    rating: 3.7,
    reviews: 780
  },
  {
    trainNo: '12905',
    trainName: 'Porbandar Express',
    from: 'Okha',
    to: 'Howrah',
    departure: '15:15',
    arrival: '05:50+2',
    duration: '38h 35m',
    days: ['Mon', 'Thu'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 5340, available: 6, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 3020, available: 20, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 2160, available: 42, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 720, available: 145, description: 'Non-AC sleeper berths' }
    ],
    rating: 3.8,
    reviews: 890
  },
  {
    trainNo: '12977',
    trainName: 'Marusagar Express',
    from: 'Ajmer',
    to: 'Ernakulam',
    departure: '04:50',
    arrival: '11:15+2',
    duration: '54h 25m',
    days: ['Tue'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 6120, available: 4, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 3450, available: 16, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 2470, available: 32, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 825, available: 112, description: 'Non-AC sleeper berths' }
    ],
    rating: 3.9,
    reviews: 670
  },
  {
    trainNo: '13005',
    trainName: 'Amritsar Mail',
    from: 'Howrah',
    to: 'Amritsar',
    departure: '23:55',
    arrival: '05:40+2',
    duration: '29h 45m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 4560, available: 8, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 2560, available: 24, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1840, available: 52, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 615, available: 189, description: 'Non-AC sleeper berths' }
    ],
    rating: 4.0,
    reviews: 1340
  },
  {
    trainNo: '14257',
    trainName: 'Kashi Vishwanath Express',
    from: 'New Delhi',
    to: 'Varanasi',
    departure: '18:40',
    arrival: '06:25+1',
    duration: '11h 45m',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 2890, available: 8, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 1680, available: 26, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1240, available: 56, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 420, available: 198, description: 'Non-AC sleeper berths' }
    ],
    rating: 4.1,
    reviews: 1560
  },
  {
    trainNo: '15707',
    trainName: 'Kisan Express',
    from: 'Amritsar',
    to: 'Kisan Ganj',
    departure: '23:20',
    arrival: '23:45+1',
    duration: '24h 25m',
    days: ['Mon', 'Wed', 'Fri'],
    classes: [
      { type: '2A', name: 'AC 2 Tier', price: 2180, available: 18, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 1560, available: 38, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 520, available: 145, description: 'Non-AC sleeper berths' }
    ],
    rating: 3.6,
    reviews: 890
  },
  {
    trainNo: '16787',
    trainName: 'Tirunelveli Express',
    from: 'Jammu Tawi',
    to: 'Tirunelveli',
    departure: '12:45',
    arrival: '06:30+3',
    duration: '65h 45m',
    days: ['Wed'],
    classes: [
      { type: '1A', name: 'AC 1 Tier', price: 7890, available: 4, description: 'Premium AC with privacy' },
      { type: '2A', name: 'AC 2 Tier', price: 4560, available: 14, description: 'Comfortable AC berths' },
      { type: '3A', name: 'AC 3 Tier', price: 3260, available: 28, description: 'Standard AC accommodation' },
      { type: 'SL', name: 'Sleeper', price: 1090, available: 98, description: 'Non-AC sleeper berths' }
    ],
    rating: 3.8,
    reviews: 560
  }
];

export const getTrainsByRoute = (from: string, to: string): Train[] => {
  return trainsData.filter(train => 
    train.from.toLowerCase().includes(from.toLowerCase()) && 
    train.to.toLowerCase().includes(to.toLowerCase())
  );
};

export const getTrainByNumber = (trainNo: string): Train | undefined => {
  return trainsData.find(train => train.trainNo === trainNo);
};

export const getAllTrains = (): Train[] => {
  return trainsData;
};
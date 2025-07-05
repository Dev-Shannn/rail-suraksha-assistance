
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SafetyDashboard from './pages/SafetyDashboard';
import ComplaintSystem from './pages/ComplaintSystem';
import AdminDashboard from './pages/AdminDashboard';
import TrainStatus from './pages/TrainStatus';
import PNRStatus from './pages/PNRStatus';
import BookingPage from './pages/BookingPage';
import PoliceCall from './pages/PoliceCall';
import Ambulance from './pages/Ambulance';
import FoodComplaint from './pages/FoodComplaint';
import SeatReview from './pages/SeatReview';
import CoachTracker from './pages/CoachTracker';
import Offers from './pages/Offers';
import HotelBooking from './pages/HotelBooking';
import FoodToSeat from './pages/FoodToSeat';
import LiveTracking from './pages/LiveTracking';
import ReviewsRatings from './pages/ReviewsRatings';
import RefundStatus from './pages/RefundStatus';
import EmergencyContacts from './pages/EmergencyContacts';
import DestinationGuide from './pages/DestinationGuide';
import EmergencyPanic from './components/EmergencyPanic';
import NotFound from './pages/404';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/safety" element={<SafetyDashboard />} />
          <Route path="/complaint" element={<ComplaintSystem />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/train-status" element={<TrainStatus />} />
          <Route path="/pnr-status" element={<PNRStatus />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/police-call" element={<PoliceCall />} />
          <Route path="/ambulance" element={<Ambulance />} />
          <Route path="/food-complaint" element={<FoodComplaint />} />
          <Route path="/seat-review" element={<SeatReview />} />
          <Route path="/coach-tracker" element={<CoachTracker />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/hotel-booking" element={<HotelBooking />} />
          <Route path="/food-to-seat" element={<FoodToSeat />} />
          <Route path="/tracking" element={<LiveTracking />} />
          <Route path="/reviews" element={<ReviewsRatings />} />
          <Route path="/refund" element={<RefundStatus />} />
          <Route path="/emergency" element={<EmergencyContacts />} />
          <Route path="/destination-guide" element={<DestinationGuide />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <EmergencyPanic />
      </div>
    </Router>
  );
}

export default App;
import "./assets/styles/application.css";
import RegistrationProvider from "./contexts/RegistrationProvider";
import Registration from "./components/views/user/registration/Registration";
import LoginProvider from "./contexts/LoginProvider";
import Login from "./components/views/user/login/Login";
import Home from "./components/views/home/Home";
import Search from "./components/views/search/Search";
import ShoppingCart from "./components/views/shoppingCart/ShoppingCart";
import Favorites from "./components/views/favorites/Favorites";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/views/user/forgotpassword/ForgotPassword";
import ForgotPasswordProvider from "./contexts/ForgotPasswordProvider";
import ApiProvider from "./Contexts/ApiProvider";
import RegistrationSuccess from "./components/views/user/registration/RegistrationSuccess";
import Profile from "./components/views/user/profile/profile";
import SignOut from "./components/views/user/profile/SignOut";
import Address from "./components/views/user/profile/Address";
import RecoverPassword from "./components/views/user/recoverpassword/RecoverPassword";
import AddNewAdress from "./components/views/user/profile/AddNewAddress";
import EditProfile from "./components/views/user/profile/EditProfile";
import EditAddress from "./components/views/user/profile/EditAddress";
import AddressProvider from "./contexts/AddressProvider";
import WishlistProvider from "./contexts/WishlistProvider";
import ProductProvider from "./contexts/ProductProvider";
import Product from "./components/views/product/Product";
import ReviewSection from "./components/partials/shared/reviews/ReviewSection";
import FilterAndSort from "./components/views/filters/FilterAndSort";
import FilterProvider from "./contexts/FilterProvider";
import PaymentMethod from "./components/views/user/profile/PaymentMethod";
import AddCreditCard from "./components/views/user/profile/AddCreditCard";
import ShoppingCartProvider from "./contexts/ShoppingCartProvider";
import Checkout from "./components/views/shoppingCart/Checkout";
import OrderConfirmationPage from "./components/views/oderResult/OrderConfirmationPage";
import OrderDeclinedPage from "./components/views/oderResult/OrderDeclined";
import OrderHistory from "./components/views/user/profile/OrderHistory";
import AddReview from "./components/partials/shared/reviews/AddReview";
import VerifyPhoneNumber from "./components/views/user/verifyphonenumber/VerifyPhoneNumber";
import FilterProducts from "./components/views/filters/FilterProducts";




function App() {
  return (
    <>
    <ApiProvider>
        <FilterProvider>
          <LoginProvider>
            <AddressProvider>
              <WishlistProvider>
                <ProductProvider>
                  <ShoppingCartProvider>
                    <Routes>
                      <Route path="/products/:id" element={<Product />} />
                      <Route
                        path="/products/:id/reviews"
                        element={<ReviewSection />}
                      />
                      <Route
                        path="/products/:id/reviews/add"
                        element={<AddReview />}
                      />
                      <Route path="/editprofile" element={<EditProfile />} />
                      <Route
                        path="/RecoverPassword"
                        element={<RecoverPassword />}
                      />
                      <Route
                        path="/filterproducts"
                        element={<FilterProducts />}
                      />
                      <Route path="/filter" element={<FilterAndSort />} />
                      <Route path="/home" element={<Home />} />
                      <Route path="/products/:id" element={<Product />} />
                      <Route
                        path="/products/reviews"
                        element={<ReviewSection />}
                      />
                      <Route path="/search" element={<Search />} />
                      <Route path="/shoppingcart" element={<ShoppingCart />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/favorites" element={<Favorites />} />
                      <Route
                        path="/registrationsuccess"
                        element={<RegistrationSuccess />}
                      />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/signout" element={<SignOut />} />
                      <Route path="/addadress" element={<AddNewAdress />} />
                      <Route path="/address" element={<Address />} />
                      <Route path="/orderhistory" element={<OrderHistory />} />
                      <Route
                        path="/paymentmethod"
                        element={<PaymentMethod />}
                      />
                      <Route
                        path="/addcreditcard"
                        element={<AddCreditCard />}
                      />
                      <Route
                        path="/forgotpassword"
                        element={
                          <ForgotPasswordProvider>
                            <ForgotPassword />
                          </ForgotPasswordProvider>
                        }
                      />
                      <Route
                        path="/registration"
                        element={
                          <RegistrationProvider>
                            <Registration />
                          </RegistrationProvider>
                        }
                      />
                      <Route path="/login" element={<Login />} />
                      <Route
                        path="/verifyphonenumber"
                        element={<VerifyPhoneNumber />}
                      />
                    </Routes>
                  </ShoppingCartProvider>
                </ProductProvider>
              </WishlistProvider>
            </AddressProvider>
          </LoginProvider>
        </FilterProvider>
      </ApiProvider>
    </>
  );
}

export default App;
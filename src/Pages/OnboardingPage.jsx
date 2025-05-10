import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { BiShow, BiHide, BiChevronLeft } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import BgImage from "../assets/images/admin-bg.jpeg";
import BgImage1 from "../assets/images/admin-bg1.jpeg";
import BgImage2 from "../assets/images/admin-bg2.jpeg";
import BgImage3 from "../assets/images/admin-bg3.jpeg";
import BgImage4 from "../assets/images/admin-bg4.jpeg";

const OnboardingSlider = () => {
  const images = [BgImage, BgImage1, BgImage2, BgImage3, BgImage4];
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    if (currentStep === 1) {
      setFormData({ ...formData, otp: e });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex">
      {/* Background Images Grid */}
      <div className="flex gap-4 w-full h-full px-4 py-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-1 rounded-xl bg-cover bg-center shadow-lg transition-all duration-300 hover:flex-grow-[1.2]"
            style={{
              backgroundImage: `url(${image})`,
              filter: "blur(2px)",
            }}
          />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-[80vh] bg-white rounded-t-4xl shadow-2xl transform transition-transform duration-300">
        <div className="p-6 h-full flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center">
            {currentStep === 0 && (
              <div className="w-full max-w-md space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-700">
                    Welcome Back
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Track prices and compare products
                  </p>
                </div>

                <button className="w-full p-3 rounded-full border border-gray-300 flex gap-3 items-center justify-center text-base hover:bg-gray-50">
                  <FcGoogle className="w-6 h-6" />
                  Continue with Google
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-3 bg-white text-sm text-gray-500">
                      or
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full py-4 px-4 text-sm border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={handleInputChange}
                  />
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      className="w-full py-4 px-4 text-sm border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none pr-12"
                      onChange={handleInputChange}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <BiHide size={20} />
                      ) : (
                        <BiShow size={20} />
                      )}
                    </button>
                  </div>

                  <button
                    onClick={() => setCurrentStep(1)}
                    className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-medium text-sm"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="w-full max-w-md space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-700">
                    Verify Account
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Secure verification process
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600">
                    We sent a code to {formData.email || "your email"}
                  </p>
                </div>

                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={formData.otp}
                    onChange={(value) => handleInputChange(value)}
                  >
                    <InputOTPGroup>
                      {[...Array(6)].map((_, index) => (
                        <React.Fragment key={index}>
                          <InputOTPSlot index={index} />
                          {index === 2 && <InputOTPSeparator />}{" "}
                          {/* Separator after third digit */}
                        </React.Fragment>
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </div>

                <button
                  onClick={() => navigate("/admin")}
                  className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-medium text-sm"
                >
                  Verify
                </button>

                <button
                  onClick={() => setCurrentStep(0)}
                  className="text-blue-600 hover:text-blue-700 flex items-center justify-center w-full"
                >
                  <BiChevronLeft className="mr-1" />
                  Back to Login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSlider;

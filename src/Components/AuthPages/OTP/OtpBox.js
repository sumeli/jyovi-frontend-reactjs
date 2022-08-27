import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from "react";

function OtpBox() {
    const [OTP, setOTP] = useState("");
    return (
        <>
            <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure />
        </>
    );
}

export default OtpBox
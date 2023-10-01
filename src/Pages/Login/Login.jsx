import facebook from "../../assets/Imges1/icons8-facebook-48.png"
import message from "../../assets/Imges1/icons8-message.gif"
import contact from "../../assets/Imges1/icons8-phone-48.png"
import AnimatedBg from "../AnimatedBg/AnimatedBg";
const Login = () => {

    return (
        <section className="relative bg-green-600 bg-gradient-to-r from-[#E69D97] to-[#2973DC] h-screen pt-32">

            <div className="  ">

                <div className=" w-1/2 left-80 text-center font-medium bg-[#3D4454] px-4 space-y-8 py-14 rounded-2xl absolute  z-20  " >
                    {/* //? Header---- */}
                    <div className="">
                        <h1 className="text-[#F8FCFF] text-xl letter-spacing">MR. COOL DEVELOPER</h1>
                    </div>
                    {/* //? Border--- */}
                    <div className="mx-6 border-b-2 border-[#9497a3]" ></div>
                    {/* //?  Text */}
                    <div>
                        <h2 className="text-[#e2e3e5]  letter-spacing">
                            I DEVELOP PIXEL PERFECT WEBSITES <br /> WITH COOL ANIMATION
                        </h2>
                    </div>
                    {/*//? Icon */}
                    <div className="flex justify-center gap-14 ">
                        <img src={facebook} alt="" />
                        <img src={contact} alt="" />
                        <img src={message} alt="" />
                    </div>

                </div>

            </div>
            {/* //? Animated Background=================== */}
            <div className="absolute top-0  right-0 left-0 ">
                <AnimatedBg />
            </div>
            <div className="box1">

            </div>
        </section>
    );
};

export default Login;
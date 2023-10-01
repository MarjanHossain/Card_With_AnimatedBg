
const AnimatedBg = () => {
    const bg = <>
        <div className="box"></div>
        <div className="box2"></div>
        <div className="box"></div>
        <div className="box1"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box1"></div>
        <div className="box"></div>
        <div className="box1"></div>
        <div className="box"></div>
        <div className="box1"></div>

    </>
    const bg2 = <>
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box2"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box2"></div>


    </>

    return (
        <div className="">

            <div className=" top-0 left-0 right-0 space-y-6  ">
                <div className="flex justify-center gap-x-36">{bg}</div>
                <div className="flex justify-center gap-28"> {bg2}</div>
                <div className="flex justify-between">{bg}</div>
                <div className="flex justify-center gap-40  ">{bg2}</div>
                <div className="flex justify-center gap-32 ">{bg2}</div>
                <div className=" flex justify-evenly ">{bg}</div>
                <div className="flex justify-around">{bg2}</div>
                <div className="flex justify-around "> {bg}</div>
                <div className="flex gap-96"> {bg}</div>
                <div className="flex justify-around">{bg2}</div>
                <div className="flex justify-around">{bg2}</div>
                <div className="flex justify-around "> {bg}</div>
            </div>
        </div>

    );
};

export default AnimatedBg;
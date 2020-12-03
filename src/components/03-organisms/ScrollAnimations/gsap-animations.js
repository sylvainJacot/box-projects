import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let timeLine = gsap.timeline();
let secondTimeLine = gsap.timeline();
let thirdTimeLine = gsap.timeline();

const FirstScrollTrigger = (ref) => {
  let data = {
    trigger: ref,
    start: "bottom center",
    end: "bottom center",
    scrub: 1,
    markers: false,
  };
  return data;
};
const SecondScrollTrigger = (ref) => {
  let data = {
    animation: secondTimeLine,
    trigger: ref,
    start: "-500px center",
    end: "-500px center",
    scrub: 3,
    markers: false,
  };
  return data;
};
const ThirdScrollTrigger = (ref) => {
  let data = {
    trigger: ref,
    start: "-700px center",
    end: "-700px center",
    scrub: 4,
    markers: false,
  };
  return data;
};

export const MainPicAnimStart = (
  MustangPictureOverlayRef,
  MainTitleRef,
  UnderlineRef,
  MainBGRef,
  MustangPictureMaskRef,
  FirstBlockRef,
  FirstWhiteBlockRef
) => {
  timeLine
    .to(MustangPictureOverlayRef.current, {
      delay: 1,
      duration: 0.6,
      opacity: 1,
      ease: Power2.easeOut,
    })
    .to(
      MainTitleRef.current,
      {
        duration: 0.3,
        opacity: 1,
        translateY: 56,
        ease: Power2.easeOut,
      },
      ">-0,6"
    )
    .to(
      UnderlineRef.current,
      {
        width: 150,
        duration: 0.6,
        opacity: 1,
        ease: Power2.easeOut,
      },
      ">-1"
    )
    .to(UnderlineRef.current, {
      delay: 1.6,
      opacity: 0,
      duration: 0.3,
      ease: Power2.easeOut,
    })
    .to(MainTitleRef.current, {
      duration: 2,
      ease: Power2.easeOut,
      y: 170,
      letterSpacing: 42,
      fontSize: 160,
      textShadow: "3px 3px 10px rgba(0, 0, 0, 0.3)",
    })
    .to(
      MainBGRef.current,
      {
        duration: 3,
        width: "50%",
        borderRadius: 8,
        ease: Power2.easeOut,
      },
      ">-2"
    )
    .to(
      MustangPictureOverlayRef.current,
      {
        delay: 0.6,
        duration: 3,
        top: "40%",
        ease: Power2.easeOut,
      },
      ">-2"
    )
    .to(
      MustangPictureMaskRef.current,
      {
        duration: 1,
        height: "400px",
        ease: Power2.easeOut,
      },
      "-=4.2"
    )
    .to(
      FirstBlockRef.current,
      {
        duration: 1.3,
        visibility: "visible",
        translateX: "-30%",
        ease: Power2.easeOut,
      },
      ">-1"
    )
    .to(
      FirstWhiteBlockRef.current,
      {
        duration: 2,
        visibility: "visible",
        translateX: "-30%",
        ease: Power2.easeOut,
      },
      ">-1"
    )
    .to(FirstBlockRef.current, {
      scrollTrigger: FirstScrollTrigger(FirstBlockRef.current),
      immediateRender: false,
      translateX: "-50%",
      ease: Power2.easeIn,
    })
    .to(FirstWhiteBlockRef.current, {
      scrollTrigger: FirstScrollTrigger(FirstBlockRef.current),
      immediateRender: false,
      translateX: "0%",
      ease: Power2.easeIn,
    })
    .to(MainTitleRef.current, {
      scrollTrigger: FirstScrollTrigger(FirstBlockRef.current),
      immediateRender: false,
      ease: Power2.easeOut,
      y: 100,
    });
};

export const SecondAnimSection = (
  SecondSectionRef,
  SecondBlockRef,
  SecondWhiteRef,
  SecondPicRef,
  SecondPicBgimg
) => {
  secondTimeLine
    .to(SecondBlockRef.current, {
      scrollTrigger: SecondScrollTrigger(SecondSectionRef.current),
      immediateRender: false,
      x: 0,
      y: 0,
      opacity: 1,
      ease: Power2.easeOut,
    })
    .to(SecondPicRef.current, {
      scrollTrigger: SecondScrollTrigger(SecondSectionRef.current),
      immediateRender: false,
      translateX: "-50%",
      translateY: "-50%",
      ease: Power2.easeOut,
    })
    .to(SecondWhiteRef.current, {
      scrollTrigger: SecondScrollTrigger(SecondSectionRef.current),
      immediateRender: false,
      width: "850px",
      height: "360px",
      top: "40px",
      left: "40px",
      opacity: 1,
      ease: Power2.easeOut,
    })
    .to(
      SecondPicBgimg.current,
      {
        scrollTrigger: SecondScrollTrigger(SecondSectionRef.current),
        marginLeft: "-260px",
        ease: Power2.easeOut,
      },
      "=+4"
    );
};

export const ThirdAnimSection = (
  ThirdMainBlockRef,
  ThirdBlockRef,
  ThirdWhiteBgRef,
  ThirdPicRef,
  ThirdPicContainerRef
) => {
  thirdTimeLine
    .to(ThirdWhiteBgRef.current, {
      scrollTrigger: ThirdScrollTrigger(ThirdMainBlockRef.current),
      immediateRender: false,
      left: "-16%",
      top: "-32%",
      ease: Power2.easeOut,
    })
    .to(ThirdBlockRef.current, {
      scrollTrigger: ThirdScrollTrigger(ThirdMainBlockRef.current),
      immediateRender: false,
      height: 320,
      width: 320,
      left: "0",
      opacity: 1,
      ease: Power2.easeOut,
    })
    .to(ThirdPicContainerRef.current, {
      scrollTrigger: ThirdScrollTrigger(ThirdMainBlockRef.current),
      immediateRender: false,
      width: "680px",
      left: "48%",
      top: "-16%",
      ease: Power2.easeOut,
    })
    .to(ThirdPicRef.current, {
      scrollTrigger: ThirdScrollTrigger(ThirdMainBlockRef.current),
      immediateRender: false,
      scale: 1.5,
      ease: Power2.easeOut,
    });
};

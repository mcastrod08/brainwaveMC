import ButtonGradient from "../assets/svg/ButtonGradient";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative infline-flex 
    items-center justify-center h-12 transition-colors cursor-pointer
    hover:text-[#AC6AFF] ${px || "px-7"}
    ${white ? "text-[#0E0C15]" : "text-white"} 
    ${className || ""}`;


  const spanClasses = "relative z-10"

  const renderButton = () => (
    <>
    
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
    <ButtonGradient/>
    </>
  );

  return renderButton();
};

export default Button;
import { Title, Forms, Content } from "./styles";
import contact from "../../assets/img/contact.svg";
import { useEffect, forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { motion, useAnimation } from "framer-motion";

export const Contact = forwardRef((props, ref) => {
  const { ref: animateRef, inView } = useInView({
    triggerOnce: true,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.6,
        },
      });
    } else {
      animation.start({ x: "-100vw" });
    }
  }, [inView, animation]);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (ev) => {
    const isValid = await trigger();
    if (!isValid) {
      ev.preventDefault();
    }
  };

  return (
    <div ref={ref}>
      <Title>
        <h2>VAMOS CONVERSAR</h2>
      </Title>

      <Content ref={animateRef}>
        <motion.div animate={animation}>
          <img src={contact} alt="contact-illustration" />
        </motion.div>

        <Forms>
          <h2>VAMOS CONVERSAR</h2>
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/7be9b881acd2522bd76c59e1b31d2e17"
            method="POST"
          >
            <label htmlFor="name-input">Seu nome:</label>
            <input
              type="text"
              placeholder="Nome"
              {...register("name", {
                required: true,
                maxLength: 80,
              })}
            />
            {errors.name && (
              <span>
                {errors.name.type === "required" && "Campo obrigatório"};
                {errors.name.type === "maxLength" && "Máximo de 80 caracteres"};
              </span>
            )}

            <label htmlFor="email-input">Seu email:</label>
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <span>
                {errors.email.type === "required" && "Campo obrigatório"};
                {errors.email.type === "pattern" && "Email inválido"};
              </span>
            )}

            <label htmlFor="message-area">Mensagem:</label>
            <textarea
              type="text"
              placeholder="Mensagem"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <span>
                {errors.message.type === "required" && "Campo obrigatório"};
                {errors.message.type === "maxLength" &&
                  "Máximo de 2000 caracteres"}
                ;
              </span>
            )}
            <button>Enviar</button>
          </motion.form>
        </Forms>
      </Content>
    </div>
  );
});

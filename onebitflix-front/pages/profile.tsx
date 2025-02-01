import Head from "next/head";
import styles from "../styles/profile.module.scss";
import UserForm from "@/components/profile/user";
import HeaderAuth from "@/components/common/headerAuth";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "@/components/common/footer";
import { useState } from "react";
import PasswordForm from "@/components/profile/password";

const UserInfo = function () {
  const [form, setForm] = useState("userForm");
  return (
    <>
      <Head>
        <title>Onebitflix - Meus Dados</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
      <div className={styles.header}> 
	<HeaderAuth />
</div>
  <Container calssName={styles.gridContainer} >
		<p className={styles.title}>Minha Conta</p>
    <Row className="pt-3 pb-5">
	    <Col md={4} className={styles.btnColumn}>
      <Button
outline
className={styles.renderFormBtn}
style={{ color: form === "userForm" ? "#ff0044" : "white" }}
onClick={() => {
	setForm("userForm");
}}
>
	DADOS PESSOAIS
</Button>
<Button
outline
className={styles.renderFormBtn}
style={{ color: form === "PasswordForm" ? "#ff0044" : "white" }}
onClick={() => {
	setForm("PasswordForm");
}}
>
	SENHA
</Button>
      </Col>
      <Col md>
      {form === "userForm" ? <UserForm /> : <PasswordForm />}
      </Col>
     </Row>
   </Container>
      </main>
      <div className={styles.footer}>
   <Footer />
</div>
    </>
  );
};

export default UserInfo;
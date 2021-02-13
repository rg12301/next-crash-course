import Head from "next/head";
import aboutStyles from "../styles/about.module.css";

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
      <h3>
        A <strong>Next.js</strong> crash course from&nbsp;
        <a
          className={aboutStyles.traversy_media}
          href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA"
        >
          Traversy Media
        </a>
        .
      </h3>
      <p className={aboutStyles.about}>
        This course covers all the fundamentals of&nbsp;
        <strong>Next.js</strong>. I loved it and looking
        forward for a course including a full stack advanced
        WebApp project using new Next.js 10 features.&nbsp;
        <strong>Great Thanks!!</strong>
      </p>
    </>
  );
};

export default about;

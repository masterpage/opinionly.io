import { css } from "@emotion/react";
import { Version } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div
      css={css`
        padding: 0 2rem;
      `}
    >
      <Head>
        <title>Opinionly</title>
        <meta name="description" content="Opinionly official website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        css={css`
          align-items: center;
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: center;
          min-height: 100vh;
          padding: 6rem 0;
        `}
      >
        <div
          css={css`
            filter: drop-shadow(0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25));
            margin-bottom: 4rem;
          `}
        >
          <Image
            alt="Intelstroy logo"
            draggable={false}
            height={192}
            src="/icon-Opinionly-iOS26-256@2x.png"
            width={192}
          />
        </div>
      </main>
      <footer
        css={css`
          align-items: center;
          bottom: 0;
          display: flex;
          flex-direction: column;
          flex: 1;
          font-size: 1rem;
          justify-content: center;
          left: 0;
          padding: 2rem 0;
          position: absolute;
          right: 0;
        `}
      >
        <div>&copy; {new Date().getFullYear()} Opinionly</div>
        <Version
          css={css`
            font-family: pt-sans-caption, sans-serif;
            font-size: 0.5rem;
            line-height: 0.5rem;
            margin-top: 0.5rem;
            padding-left: 1rem;
            position: relative;

            &:before {
              background-color: red;
              background: url("data:image/svg+xml,%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 8 8' style='enable-background:new 0 0 8 8;' xml:space='preserve'%3E%3Crect x='1.6' y='0' fill='%23D45046' width='1.6' height='1.6'/%3E%3Crect y='6.4' fill='%23FBC02D' width='1.6' height='1.6'/%3E%3Crect x='1.6' y='6.4' fill='%23CDB834' width='1.6' height='1.6'/%3E%3Crect x='3.2' y='6.4' fill='%239FB03A' width='1.6' height='1.6'/%3E%3Crect x='4.8' y='6.4' fill='%2371A841' width='1.6' height='1.6'/%3E%3Crect x='6.4' y='6.4' fill='%2343A047' width='1.6' height='1.6'/%3E%3Crect y='4.8' fill='%23F9A12F' width='1.6' height='1.6'/%3E%3Crect y='3.2' fill='%23F88232' width='1.6' height='1.6'/%3E%3Crect y='1.6' fill='%23F66234' width='1.6' height='1.6'/%3E%3Crect y='0' fill='%23F44336' width='1.6' height='1.6'/%3E%3Crect x='6.4' y='4.8' fill='%23509553' width='1.6' height='1.6'/%3E%3Cpolygon fill='%23757575' points='4,0 4,4 8,4 6.4,2.4 5.6,2.4 5.6,1.6 '/%3E%3C/svg%3E")
                0% 0% no-repeat;
              content: "";
              height: 0.5rem;
              left: 0;
              position: absolute;
              top: 0;
              width: 0.5rem;
            }
          `}
        />
      </footer>
    </div>
  );
};

export default Home;

import {
  faArrowDown,
  faArrowRight,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Bloco } from "../../components/Bloco";

import "./style.css";

const Home = () => {
  const [fase, setFase] = useState(1);
  // 1 - RAM
  const [sete_2, setSete_2] = useState("");
  const [oito_2, setOito_2] = useState("");
  const [nove_2, setNove_2] = useState("");

  // 2 - MEMORIA DE MASSA
  const [nove_3, setNove_3] = useState("");
  const [nove_4, setNove_4] = useState("");
  const [nove_5, setNove_5] = useState("");
  const [nove_6, setNove_6] = useState("");
  const [nove_7, setNove_7] = useState("");
  const [nove_8, setNove_8] = useState("");
  const [nove_9, setNove_9] = useState("");
  const [nove_10, setNove_10] = useState("");
  const [nove_11, setNove_11] = useState("");
  const [nove_12, setNove_12] = useState("");
  const [nove_13, setNove_13] = useState("");
  const [nove_14, setNove_14] = useState("");
  const [nove_15, setNove_15] = useState("");

  //  3 - CPU
  const [seis_3, setSeis_3] = useState("");
  const [seis_4, setSeis_4] = useState("");
  const [seis_5, setSeis_5] = useState("");

  // 4 - EPROM
  const [cinco_4, setCinco_4] = useState("");
  const [sete_4, setSete_4] = useState("");
  const [oito_4, setOito_4] = useState("");

  // 5 - QUADCORE
  const [dois_10, setDois_10] = useState("");
  const [tres_10, setTres_10] = useState("");
  const [quat_10, setQuat_10] = useState("");
  const [cinco_10, setCinco_10] = useState("");
  const [seis_10, setSeis_10] = useState("");
  const [sete_10, setSete_10] = useState("");
  const [oito_10, setOito_10] = useState("");

  // 6 - i7
  const [dez_7, setDez_7] = useState("");

  // 7 - databus
  const [tres_5, setTres_5] = useState("");
  const [tres_6, setTres_6] = useState("");
  const [tres_7, setTres_7] = useState("");
  const [tres_8, setTres_8] = useState("");
  const [tres_9, setTres_9] = useState("");
  const [tres_11, setTres_11] = useState("");

  // 8 - DMA
  const [dez_9, setDez_9] = useState("");
  const [onze_9, setOnze_9] = useState("");

  // 9 - flash
  const [sete_12, setSete_12] = useState("");
  const [oito_12, setOito_12] = useState("");
  const [dez_12, setDez_12] = useState("");
  const [onze_12, setOnze_12] = useState("");

  // 10 - adressbus
  const [cinco_9, setCinco_9] = useState("");
  const [cinco_11, setCinco_11] = useState("");
  const [cinco_12, setCinco_12] = useState("");
  const [cinco_13, setCinco_13] = useState("");
  const [cinco_14, setCinco_14] = useState("");
  const [cinco_15, setCinco_15] = useState("");
  const [cinco_16, setCinco_16] = useState("");
  const [cinco_17, setCinco_17] = useState("");

  // 11 - ULA
  const [seis_16, setSeis_16] = useState("");
  const [sete_16, setSeta_16] = useState("");

  // 12 - DUALCORE
  const [sete_14, setSeta_14] = useState("");
  const [sete_15, setSeta_15] = useState("");
  const [sete_17, setSeta_17] = useState("");
  const [sete_18, setSeta_18] = useState("");
  const [sete_19, setSeta_19] = useState("");
  const [sete_20, setSeta_20] = useState("");
  const [sete_21, setSeta_21] = useState("");

  // 13 - REGISTRADORES

  const [um_20, setUm_20] = useState("");
  const [dois_20, setDois_20] = useState("");
  const [tres_20, setTres_20] = useState("");
  const [quat_20, setQuat_20] = useState("");
  const [cinco_20, setCinco_20] = useState("");
  const [seis_20, setSeis_20] = useState("");
  const [oito_20, setOito_20] = useState("");
  const [nove_20, setNove_20] = useState("");
  const [dez_20, setDez_20] = useState("");
  const [onze_20, setOnze_20] = useState("");
  const [doze_20, setDoze_20] = useState("");
  const [tr_20, setTr_20] = useState("");

  // 14 - ROM
  const [dez_19, setDez_19] = useState("");
  const [dez_21, setDez_21] = useState("");

  // 15 - CS
  const [quat_14, setQuat_14] = useState("");

  // 16 - i5
  const [quat_19, setQuat_19] = useState("");

  function active() {
    console.log(fase);

    switch (fase) {
      case 1: {
        const data = [
          sete_2.toUpperCase(),
          oito_2.toUpperCase(),
          nove_2.toUpperCase(),
        ];
        const res = ["R", "A", "M"];

        if (JSON.stringify(data) === JSON.stringify(res)) {
          alert("acertou 1");
          setFase(2);
        }
        break;
      }
      case 2: {
        const data = [
          nove_2.toUpperCase(),
          nove_3.toUpperCase(),
          nove_4.toUpperCase(),
          nove_5.toUpperCase(),
          nove_6.toUpperCase(),
          nove_7.toUpperCase(),
          nove_8.toUpperCase(),
          nove_9.toUpperCase(),
          nove_10.toUpperCase(),
          nove_11.toUpperCase(),
          nove_12.toUpperCase(),
          nove_13.toUpperCase(),
          nove_14.toUpperCase(),
          nove_15.toUpperCase(),
        ];
        const res = [
          "M",
          "E",
          "M",
          "O",
          "R",
          "I",
          "A",
          "D",
          "E",
          "M",
          "A",
          "S",
          "S",
          "A",
        ];

        if (JSON.stringify(data) === JSON.stringify(res)) {
          alert("acertou 2");
          setFase(3);
        }

        break;
      }
      case 3: {
        const data = [
          seis_3.toUpperCase(),
          seis_4.toUpperCase(),
          seis_5.toUpperCase(),
        ];
        const res = ["U", "P", "C"];

        if (JSON.stringify(res) === JSON.stringify(data)) {
          alert("acertou 3");
          setFase(4);
        }
        break;
      }
      case 4: {
        const data = [
          cinco_4.toUpperCase(),
          seis_4.toUpperCase(),
          sete_4.toUpperCase(),
          oito_4.toUpperCase(),
          nove_4.toUpperCase(),
        ];
        const res = ["E", "P", "R", "O", "M"];

        if (JSON.stringify(data) === JSON.stringify(res)) {
          alert("acertou 4");
          setFase(5);
        }
        break;
      }
      case 5: {
        const data = [
          dois_10.toUpperCase(),
          tres_10.toUpperCase(),
          quat_10.toUpperCase(),
          cinco_10.toUpperCase(),
          seis_10.toUpperCase(),
          sete_10.toUpperCase(),
          oito_10.toUpperCase(),
          nove_10.toUpperCase(),
        ];
        const res = ["Q", "U", "A", "D", "C", "O", "R", "E"];

        if (JSON.stringify(data) === JSON.stringify(res)) {
          alert("acertou 5");
          setFase(6);
        }
        break;
      }
      case 6: {
        const data = [nove_7.toUpperCase(), dez_7.toUpperCase()];
        const res = ["I", "7"];

        if (JSON.stringify(data) === JSON.stringify(res)) {
          alert("acertou 6");
          setFase(7);
        }
        break;
      }
      case 7: {
        const data = [
          tres_5.toUpperCase(),
          tres_6.toUpperCase(),
          tres_7.toUpperCase(),
          tres_8.toUpperCase(),
          tres_9.toUpperCase(),
          tres_10.toUpperCase(),
          tres_11.toUpperCase(),
        ];
        const res = ["D", "A", "T", "A", "B", "U", "S"];

        if (JSON.stringify(data) === JSON.stringify(res)) {
          alert("acertou 7");
          setFase(8);
        }
        break;
      }
      case 8: {
        const data = [
          nove_9.toUpperCase(),
          dez_9.toUpperCase(),
          onze_9.toUpperCase(),
        ];
        const res = ["D", "M", "A"];
        if (JSON.stringify(data) === JSON.stringify(res)) {
          alert("acertou 8");
          setFase(9);
        }
        break;
      }
      case 9: {
        const data = [
          sete_12.toUpperCase(),
          oito_12.toUpperCase(),
          nove_12.toUpperCase(),
          dez_12.toUpperCase(),
          onze_12.toUpperCase(),
        ];

        console.log(data);

        const res = ["F", "L", "A", "S", "H"];

        if (JSON.stringify(data) === JSON.stringify(res)) {
          alert("acertou 9");
          setFase(10);
        }
        break;
      }
      case 10: {
        const data = [
          cinco_9.toUpperCase(),
          cinco_10.toUpperCase(),
          cinco_11.toUpperCase(),
          cinco_12.toUpperCase(),
          cinco_13.toUpperCase(),
          cinco_14.toUpperCase(),
          cinco_15.toUpperCase(),
          cinco_16.toUpperCase(),
          cinco_17.toUpperCase(),
        ];
        const res = ["A", "D", "R", "E", "S", "S", "B", "U", "S"];

        if (JSON.stringify(data) === JSON.stringify(res)) {
          alert("acertou 10");
          setFase(11);
        }
        break;
      }
      case 11: {
        const data = [
          cinco_16.toUpperCase(),
          seis_16.toUpperCase(),
          sete_16.toUpperCase(),
        ];
        const res = ["U", "L", "A"];

        if (JSON.stringify(data) === JSON.stringify(res)) {
          alert("acertou 11");
          setFase(12);
        }
        break;
      }
      case 12: {
        const data = [
          sete_14.toUpperCase(),
          sete_15.toUpperCase(),
          sete_16.toUpperCase(),
          sete_17.toUpperCase(),
          sete_18.toUpperCase(),
          sete_19.toUpperCase(),
          sete_20.toUpperCase(),
          sete_21.toUpperCase(),
        ];
        const res = ["D", "U", "A", "L", "C", "O", "R", "E"];

        if (JSON.stringify(data) === JSON.stringify(res)) {
          alert("acertou 12");
          setFase(13);
        }
        break;
      }
      case 13: {
        const data = [
          um_20.toUpperCase(),
          dois_20.toUpperCase(),
          tres_20.toUpperCase(),
          quat_20.toUpperCase(),
          cinco_20.toUpperCase(),
          seis_20.toUpperCase(),
          sete_20.toUpperCase(),
          oito_20.toUpperCase(),
          nove_20.toUpperCase(),
          dez_20.toUpperCase(),
          onze_20.toUpperCase(),
          doze_20.toUpperCase(),
          tr_20.toUpperCase(),
        ];
        console.log(data);
        const res = [
          "R",
          "E",
          "G",
          "I",
          "S",
          "T",
          "R",
          "A",
          "D",
          "O",
          "R",
          "E",
          "S",
        ];

        if (JSON.stringify(data) === JSON.stringify(res)) {
          alert("acertou 13");
          setFase(14);
        }
        break;
      }
      case 14: {
        const data = [
          dez_19.toUpperCase(),
          dez_20.toUpperCase(),
          dez_21.toUpperCase(),
        ];
        const res = ["R", "O", "M"];

        if (JSON.stringify(data) === JSON.stringify(res)) {
          alert("acertou 14");
          setFase(15);
        }
        break;
      }
      case 15: {
        const data = [quat_14.toUpperCase(), cinco_14.toUpperCase()];
        const res = ["C", "S"];

        if (JSON.stringify(data) === JSON.stringify(res)) {
          alert("Acertou 15");
          setFase(16);
        }
        break;
      }
      case 16: {
        const data = [quat_20.toUpperCase(), quat_19.toUpperCase()];
        const res = ["I", "5"];

        if (JSON.stringify(data) === JSON.stringify(res)) {
          alert("Acertou 16");
          alert("Meus Parabéns, você ganhou!");
        }
      }
    }
  }

  return (
    <div id="Home">
      <h1>Cruzadinha 😵‍💫</h1>
      <div id="card-cruzadinha">
        <Bloco
          cl={0}
          number20={13}
          icon20={<FontAwesomeIcon icon={faArrowRight} />}
        />
        <Bloco
          cl={1}
          number10={5}
          icon10={<FontAwesomeIcon icon={faArrowRight} />}
          status20={true}
          keyup20={() => active(13)}
          value20={um_20}
          change20={(e) => setUm_20(e.target.value)}
          // --
        />
        {/* 2 */}
        <Bloco
          cl={2}
          //
          status10={true}
          keyup10={() => active(5)}
          value10={dois_10}
          change10={(e) => setDois_10(e.target.value)}
          // --
          status20={true}
          keyup20={() => active(13)}
          value20={dois_20}
          change20={(e) => setDois_20(e.target.value)}
          // --
        />
        {/* 3 */}
        <Bloco
          cl={3}
          number4={7}
          icon4={<FontAwesomeIcon icon={faArrowDown} />}
          number14={15}
          icon14={<FontAwesomeIcon icon={faArrowRight} />}
          // --
          status5={true}
          keyup5={() => active(7)}
          value5={tres_5}
          change5={(e) => setTres_5(e.target.value)}
          // --
          status6={true}
          keyup6={() => active(7)}
          value6={tres_6}
          change6={(e) => setTres_6(e.target.value)}
          // --
          status7={true}
          keyup7={() => active(7)}
          value7={tres_7}
          change7={(e) => setTres_7(e.target.value)}
          // --
          status8={true}
          keyup8={() => active(7)}
          value8={tres_8}
          change8={(e) => setTres_8(e.target.value)}
          // --
          status9={true}
          keyup9={() => active(7)}
          value9={tres_9}
          change9={(e) => setTres_9(e.target.value)}
          // --
          status10={true}
          keyup10={() => active(5)}
          value10={tres_10}
          change10={(e) => setTres_10(e.target.value)}
          // --
          status11={true}
          keyup11={() => active(7)}
          value11={tres_11}
          change11={(e) => setTres_11(e.target.value)}
          // --
          status20={true}
          keyup20={() => active(13)}
          value20={tres_20}
          change20={(e) => setTres_20(e.target.value)}
          // --
        />
        {/* 4 */}
        <Bloco
          cl={4}
          number4={4}
          icon4={<FontAwesomeIcon icon={faArrowRight} />}
          number16={11}
          icon16={<FontAwesomeIcon icon={faArrowRight} />}
          number21={16}
          icon21={<FontAwesomeIcon icon={faArrowUp} />}
          // --
          status10={true}
          keyup10={() => active(5)}
          value10={quat_10}
          change10={(e) => setQuat_10(e.target.value)}
          // --
          status14={true}
          keyup14={() => active(15)}
          value14={quat_14}
          change14={(e) => setQuat_14(e.target.value)}
          // --
          status19={true}
          keyup19={() => active(16)}
          value19={quat_19}
          change19={(e) => setQuat_19(e.target.value)}
          // --
          // --
          status20={true}
          keyup20={() => active(13)}
          value20={quat_20}
          change20={(e) => setQuat_20(e.target.value)}
        />
        {/* 5 */}
        <Bloco
          cl={5}
          number8={10}
          icon8={<FontAwesomeIcon icon={faArrowDown} />}
          // --
          status4={true}
          keyup4={() => active(4)}
          value4={cinco_4}
          change4={(e) => setCinco_4(e.target.value)}
          // --
          status9={true}
          keyup9={() => active(10)}
          value9={cinco_9}
          change9={(e) => setCinco_9(e.target.value)}
          // --
          status10={true}
          keyup10={() => active(5)}
          value10={cinco_10}
          change10={(e) => setCinco_10(e.target.value)}
          // --
          status11={true}
          keyup11={() => active(10)}
          value11={cinco_11}
          change11={(e) => setCinco_11(e.target.value)}
          // --
          status12={true}
          keyup12={() => active(10)}
          value12={cinco_12}
          change12={(e) => setCinco_12(e.target.value)}
          // --
          status13={true}
          keyup13={() => active(10)}
          value13={cinco_13}
          change13={(e) => setCinco_13(e.target.value)}
          // --
          status14={true}
          keyup14={() => active(5)}
          value14={cinco_14}
          change14={(e) => setCinco_14(e.target.value)}
          // --
          status15={true}
          keyup15={() => active(5)}
          value15={cinco_15}
          change15={(e) => setCinco_15(e.target.value)}
          // --
          status16={true}
          keyup16={() => active(5)}
          value16={cinco_16}
          change16={(e) => setCinco_16(e.target.value)}
          // --
          status17={true}
          keyup17={() => active(5)}
          value17={cinco_17}
          change17={(e) => setCinco_17(e.target.value)}
          // --
          status20={true}
          keyup20={() => active(13)}
          value20={cinco_20}
          change20={(e) => setCinco_20(e.target.value)}
        />
        {/* 6 */}
        <Bloco
          cl={6}
          number2={1}
          icon2={<FontAwesomeIcon icon={faArrowRight} />}
          number6={3}
          icon6={<FontAwesomeIcon icon={faArrowUp} />}
          number12={9}
          icon12={<FontAwesomeIcon icon={faArrowRight} />}
          // CPU
          status3={true}
          keyup3={() => active(3)}
          value3={seis_3}
          change3={(e) => setSeis_3(e.target.value)}
          // ----
          status4={true}
          keyup4={() => active(3)}
          value4={seis_4}
          change4={(e) => setSeis_4(e.target.value)}
          // ----
          status5={true}
          keyup5={() => active(3)}
          value5={seis_5}
          change5={(e) => setSeis_5(e.target.value)}
          // ----
          status10={true}
          keyup10={() => active(5)}
          value10={seis_10}
          change10={(e) => setSeis_10(e.target.value)}
          // --
          status16={true}
          keyup16={() => active(11)}
          value16={seis_16}
          change16={(e) => setSeis_16(e.target.value)}
          // --
          status20={true}
          keyup20={() => active(13)}
          value20={seis_20}
          change20={(e) => setSeis_20(e.target.value)}
        />
        {/* 7 */}
        <Bloco
          cl={7}
          number13={12}
          icon13={<FontAwesomeIcon icon={faArrowDown} />}
          // Ram
          status2={true}
          keyup2={() => active(1)}
          value2={sete_2}
          change2={(e) => setSete_2(e.target.value)}
          // ----
          status4={true}
          keyup4={() => active(4)}
          value4={sete_4}
          change4={(e) => setSete_4(e.target.value)}
          // --
          status10={true}
          keyup10={() => active(5)}
          value10={sete_10}
          change10={(e) => setSete_10(e.target.value)}
          // --
          status12={true}
          keyup12={() => active(9)}
          value12={sete_12}
          change12={(e) => setSete_12(e.target.value)}
          // --
          status14={true}
          keyup14={() => active(12)}
          value14={sete_14}
          change14={(e) => setSeta_14(e.target.value)}
          // --
          status15={true}
          keyup15={() => active(12)}
          value15={sete_15}
          change15={(e) => setSeta_15(e.target.value)}
          // --
          status16={true}
          keyup16={() => active(11)}
          value16={sete_16}
          change16={(e) => setSeta_16(e.target.value)}
          // --
          status17={true}
          keyup17={() => active(12)}
          value17={sete_17}
          change17={(e) => setSeta_17(e.target.value)}
          // --
          status18={true}
          keyup18={() => active(12)}
          value18={sete_18}
          change18={(e) => setSeta_18(e.target.value)}
          // --
          status19={true}
          keyup19={() => active(12)}
          value19={sete_19}
          change19={(e) => setSeta_19(e.target.value)}
          // --
          status20={true}
          keyup20={() => active(12)}
          value20={sete_20}
          change20={(e) => setSeta_20(e.target.value)}
          // --
          status21={true}
          keyup21={() => active(12)}
          value21={sete_21}
          change21={(e) => setSeta_21(e.target.value)}
          // --
        />
        {/* 8 */}
        <Bloco
          cl={8}
          number7={6}
          icon7={<FontAwesomeIcon icon={faArrowRight} />}
          number9={8}
          icon9={<FontAwesomeIcon icon={faArrowRight} />}
          // Ram
          status2={true}
          keyup2={() => active(1)}
          value2={oito_2}
          change2={(e) => setOito_2(e.target.value)}
          // ----
          status4={true}
          keyup4={() => active(4)}
          value4={oito_4}
          change4={(e) => setOito_4(e.target.value)}
          // --
          status10={true}
          keyup10={() => active(5)}
          value10={oito_10}
          change10={(e) => setOito_10(e.target.value)}
          // --
          status12={true}
          keyup12={() => active(9)}
          value12={oito_12}
          change12={(e) => setOito_12(e.target.value)}
          // --
          status20={true}
          keyup20={() => active(13)}
          value20={oito_20}
          change20={(e) => setOito_20(e.target.value)}
        />
        {/* 9 */}
        <Bloco
          cl={9}
          number1={2}
          icon1={<FontAwesomeIcon icon={faArrowDown} />}
          // M
          status2={true}
          keyup2={() => active(1)}
          value2={nove_2}
          change2={(e) => setNove_2(e.target.value)}
          // ---- E
          status3={true}
          keyup3={() => active(2)}
          value3={nove_3}
          change3={(e) => setNove_3(e.target.value)}
          // -- M
          status4={true}
          keyup4={() => active(2)}
          value4={nove_4}
          change4={(e) => setNove_4(e.target.value)}
          // -- O
          status5={true}
          keyup5={() => active(2)}
          value5={nove_5}
          change5={(e) => setNove_5(e.target.value)}
          // -- R
          status6={true}
          keyup6={() => active(2)}
          value6={nove_6}
          change6={(e) => setNove_6(e.target.value)}
          // -- I
          status7={true}
          keyup7={() => active(2)}
          value7={nove_7}
          change7={(e) => setNove_7(e.target.value)}
          // -- A
          status8={true}
          keyup8={() => active(2)}
          value8={nove_8}
          change8={(e) => setNove_8(e.target.value)}
          // -- D
          status9={true}
          keyup9={() => active(2)}
          value9={nove_9}
          change9={(e) => setNove_9(e.target.value)}
          // -- E
          status10={true}
          keyup10={() => active(2)}
          value10={nove_10}
          change10={(e) => setNove_10(e.target.value)}
          // -- M
          status11={true}
          keyup11={() => active(2)}
          value11={nove_11}
          change11={(e) => setNove_11(e.target.value)}
          // -- A
          status12={true}
          keyup12={() => active(2)}
          value12={nove_12}
          change12={(e) => setNove_12(e.target.value)}
          // -- S
          status13={true}
          keyup13={() => active(2)}
          value13={nove_13}
          change13={(e) => setNove_13(e.target.value)}
          // -- S
          status14={true}
          keyup14={() => active(2)}
          value14={nove_14}
          change14={(e) => setNove_14(e.target.value)}
          // -- A
          status15={true}
          keyup15={() => active(2)}
          value15={nove_15}
          change15={(e) => setNove_15(e.target.value)}
          // --
          status20={true}
          keyup20={() => active(13)}
          value20={nove_20}
          change20={(e) => setNove_20(e.target.value)}
        />
        {/* 10 */}
        <Bloco
          cl={10}
          number18={14}
          icon18={<FontAwesomeIcon icon={faArrowDown} />}
          // --
          status7={true}
          keyup7={() => active(6)}
          value7={dez_7}
          change7={(e) => setDez_7(e.target.value)}
          // --
          status9={true}
          keyup9={() => active(8)}
          value9={dez_9}
          change9={(e) => setDez_9(e.target.value)}
          // --
          status12={true}
          keyup12={() => active(9)}
          value12={dez_12}
          change12={(e) => setDez_12(e.target.value)}
          // --
          status19={true}
          keyup19={() => active(14)}
          value19={dez_19}
          change19={(e) => setDez_19(e.target.value)}
          // --
          status20={true}
          keyup20={() => active(13)}
          value20={dez_20}
          change20={(e) => setDez_20(e.target.value)}
          // --
          status21={true}
          keyup21={() => active(14)}
          value21={dez_21}
          change21={(e) => setDez_21(e.target.value)}
        />
        {/* 11 */}
        <Bloco
          cl={11}
          status9={true}
          keyup9={() => active(8)}
          value9={onze_9}
          change9={(e) => setOnze_9(e.target.value)}
          // --
          status12={true}
          keyup12={() => active(9)}
          value12={onze_12}
          change12={(e) => setOnze_12(e.target.value)}
          // --
          status20={true}
          keyup20={() => active(13)}
          value20={onze_20}
          change20={(e) => setOnze_20(e.target.value)}
        />
        {/* 12 */}
        <Bloco
          cl={12}
          status20={true}
          keyup20={() => active(13)}
          value20={doze_20}
          change20={(e) => setDoze_20(e.target.value)}
        />
        {/* 13 */}
        <Bloco
          cl={13}
          status20={true}
          keyup20={() => active(13)}
          value20={tr_20}
          change20={(e) => setTr_20(e.target.value)}
        />
        <Bloco cl={14} />
      </div>
    </div>
  );
};

export default Home;

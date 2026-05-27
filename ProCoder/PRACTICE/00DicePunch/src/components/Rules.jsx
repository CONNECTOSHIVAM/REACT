import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play Dice game</h2>
      <div className="text">
        <p>select any number</p>
        <p>click on dice image</p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>If you get wrong guess than 2 point will be deducted.</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
 background: #fbf1f1;
 padding: 25px;
 max-width: 800px;
 margin: 0 auto;
 border-radius:  0 0 30px 30px;
 margin-top: 40px;
 margin-bottom: 36px;
 transition: 0.5s background ease-in-out;

 h2{
    font-size: 26px;
    font-weight: bolder;
 }
 .text{
    margin-top: 25px;
 }
`;

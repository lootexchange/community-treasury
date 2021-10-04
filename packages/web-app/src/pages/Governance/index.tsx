import { Col } from "react-bootstrap";
import Section from "../../layout/Section";
import { useAllProposals } from "../../wrappers/lootDao";
import Proposals from "../../components/Proposals";
import classes from "./Governance.module.css";

const GovernancePage = () => {
  const { data: proposals } = useAllProposals();

  return (
    <Section bgColor="transparent" fullWidth={true}>
      <Col lg={{ span: 8, offset: 2 }}>
        <h1 style={{ marginTop: 32 }} className={classes.heading}>
          Loot Royalty DAO
        </h1>
        <h3
          style={{
            marginBottom: 32,
            fontSize: 20,
            fontWeight: 400,
            maxWidth: 650,
            lineHeight: 1.5,
          }}
        >
          A community-governed treasury for collecting and allocating Loot royalties. 
          One vote per Loot bag. Currently collecting from <a href="https://loot.exchange" target="_blank">Loot.Exchange</a>
        </h3>
        <Proposals proposals={proposals} />
        <p>
          A minimum threshold of 0.1% of the total Loot supply (8 bags) is required to
          submit proposals
        </p>
      </Col>
    </Section>
  );
};
export default GovernancePage;

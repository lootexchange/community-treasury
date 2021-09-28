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
          Community Treasury
        </h1>
        <h3
          style={{
            marginBottom: 32,
            fontSize: 20,
            fontWeight: 400,
            maxWidth: 650,
            lineHeight: 1.5
          }}
        >
          Loot bags govern the Loot Exchange Treasury. You can vote on proposals
          that control the funds within the treasury.
        </h3>
        <Proposals proposals={proposals} />
        <p>
          A minimum threshold of 1% of the total Loot supply is required to
          submit proposals
        </p>
      </Col>
    </Section>
  );
};
export default GovernancePage;

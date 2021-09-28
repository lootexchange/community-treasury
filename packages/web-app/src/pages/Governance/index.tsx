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
        <h1 className={classes.heading}>Loot Exchange Treasury</h1>
        <h2 className={classes.subheading}>
          Loot bags govern the Loot Exchange Treasury. You can vote on proposals
          that control the funds within the treasury.
        </h2>
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

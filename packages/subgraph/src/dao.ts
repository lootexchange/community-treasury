import { Vote } from "./types/schema";
import { VoteCast } from "./types/LootDAO/LootDAO";

export function handleVoteCast(event: VoteCast): void {
  let voter = event.params.voter;
  let proposalId = event.params.proposalId;
  let tokenIds = event.params.tokenIds;
  let support = event.params.support;

  for (let i = 0; i < tokenIds.length; i++) {
    let vote = new Vote(proposalId.toString() + "-" + tokenIds[i].toString());
    vote.voter = voter.toHexString();
    vote.proposalId = proposalId;
    vote.tokenId = tokenIds[i];
    vote.support = support == 1;
    vote.save();
  }
}

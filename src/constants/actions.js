const actionTypes = {
  newBlockCreated: 'NEW_BLOCK_CREATED',
  accountUpdated: 'ACCOUNT_UPDATED',
  accountLoggedOut: 'ACCOUNT_LOGGED_OUT',
  accountLoggedIn: 'ACCOUNT_LOGGED_IN',
  activePeerSet: 'ACTIVE_PEER_SET',
  activePeerUpdate: 'ACTIVE_PEER_UPDATE',
  activePeerReset: 'ACTIVE_PEER_RESET',
  dialogDisplayed: 'DIALOG_DISPLAYED',
  dialogHidden: 'DIALOG_HIDDEN',
  forgedBlocksUpdated: 'FORGED_BLOCKS_UPDATED',
  forgingStatsUpdated: 'FORGING_STATS_UPDATED',
  forgingReset: 'FORGING_RESET',
  VotePlaced: 'VOTE_PLACED',
  voteToggled: 'VOTE_TOGGLED',
  votesAdded: 'VOTES_ADDED',
  votesUpdated: 'VOTES_UPDATED',
  voteLookupStatusCleared: 'VOTE_LOOKUP_STATUS_CLEARED',
  voteLookupStatusUpdated: 'VOTE_LOOKUP_STATUS_UPDATED',
  delegatesAdded: 'DELEGATES_ADDED',
  pendingVotesAdded: 'PENDING_VOTES_ADDED',
  toastDisplayed: 'TOAST_DISPLAYED',
  toastHidden: 'TOAST_HIDDEN',
  loadingStarted: 'LOADING_STARTED',
  loadingFinished: 'LOADING_FINISHED',
  transactionAdded: 'TRANSACTION_ADDED',
  transactionsFailed: 'TRANSACTIONS_FAILED',
  transactionsUpdated: 'TRANSACTIONS_UPDATED',
  transactionsLoaded: 'TRANSACTIONS_LOADED',
  transactionsReset: 'TRANSACTIONS_RESET',
  passphraseUsed: 'PASSPHRASE_USED',
  accountsRetrieved: 'ACCOUNTS_RETRIEVED',
  accountSaved: 'ACCOUNT_SAVED',
  accountRemoved: 'ACCOUNT_REMOVED',
  accountSwitched: 'ACCOUNT_SWITCHED',
};

export default actionTypes;

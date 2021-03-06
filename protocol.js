exports.reply = {
  welcome:        '001',
  yourHost:       '002',
  created:        '003',
  myInfo:         '004',

  whoIsUser:      '311',
  whoIsServer:    '312',
  whoIsOperator:  '313',
  whoIsIdle:      '317',
  endOfWhoIs:     '318',
  whoIsChannels:  '319',

  topic:          '332',
  noTopic:        '331',
  nameReply:      '353',
  endNames:       '366',

  motdStart:      '375',
  motd:           '372',
  motdEnd:        '376',
  who:            '352',
  endWho:         '315',
  channelModes:   '324',
  endBan:         '368'
};

exports.errors = {
  // Errors
  noSuchNick:     '401',
  noSuckServer:   '402',
  cannotSend:     '404',
  noRecipient:    '411',
  noTextToSend:   '412',
  noNickGiven:    '431',
  badNick:        '432',
  nameInUse:      '433',
  noSuchChannel:  '403',
  channelOpsReq:  '482'

};

exports.validations = {
  invalidNick:    /[^\w_^`\\\[\]{}]/,
  // any 8bit code except SPACE, BELL, NUL, CR, LF and comma (',')
  invalidChannel: /[  \n\r,]/
};

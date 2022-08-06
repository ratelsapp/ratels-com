export const idlFactory = ({ IDL }) => {
  const Email = IDL.Text;
  const EmailPage = IDL.Record({
    'content' : IDL.Vec(Email),
    'offset' : IDL.Nat,
    'limit' : IDL.Nat,
    'totalElements' : IDL.Nat,
  });
  const SubscribeResult = IDL.Record({
    'status' : IDL.Bool,
    'code' : IDL.Text,
  });
  return IDL.Service({
    'getEmailList' : IDL.Func([IDL.Nat, IDL.Nat], [EmailPage], ['query']),
    'getEmailSize' : IDL.Func([], [IDL.Nat], ['query']),
    'subscribe' : IDL.Func([Email], [SubscribeResult], []),
  });
};
export const init = ({ IDL }) => { return []; };

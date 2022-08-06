import HashMap "mo:base/HashMap";
import Bool "mo:base/Bool";
import Array "mo:base/Array";
import Text "mo:base/Text";
import Map "mo:base/HashMap";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import Types "./Types";
import Utils "./Utils";

actor {
  type Email = Text;
  type EmailPage = Types.Page<Email>;
  type SubscribeResult = {
    status: Bool;
    code: Text;
  };

  stable var emails : [Email] = [];

  public func subscribe(email : Email): async SubscribeResult {
    func isEmailEq(existedEmail: Email): Bool {
      existedEmail == email
    };

    var exist: Bool = switch(Array.find<Email>(emails, isEmailEq)) {
      case (?isExist) { true };
      case _ { false };
    };

    if (exist) {
      return {
        status = false;
        code = "601"; // email exist
      };
    } else {
      if (not Utils.isValidEmail(email)) {
        return {
          status = false;
          code = "602"; // is not valid email
        };
      };

      emails := Array.append<Email>(emails, [email]);

      return {
        status = true;
        code = "600";
      };
    };
  };

  public query func getEmailSize(): async Nat{
    emails.size()
  };

  public query func getEmailList(offset: Nat, limit: Nat): async EmailPage {
    return {
      totalElements = emails.size();
      content = Utils.arrayRange<Text>(emails, offset, limit);
      limit = limit;
      offset = offset;
    };
  };
};

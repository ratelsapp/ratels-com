import Text "mo:base/Text";
import Int "mo:base/Int";
import Nat "mo:base/Nat";

module {
  public type Email = Text;

  public type Page<T> = {
    totalElements: Nat;
    content: [T];
    offset: Nat;
    limit: Nat;
  };
}
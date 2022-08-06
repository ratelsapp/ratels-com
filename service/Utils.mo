import List "mo:base/List";
import Iter "mo:base/Iter";
import Array "mo:base/Array";
import Text "mo:base/Text";
import Int "mo:base/Int";
import Nat "mo:base/Nat";
import Order "mo:base/Order";
import Debug "mo:base/Debug";

module {
    public func arrayContains<T>(arr: [T], item: T, equal: (T, T) -> Bool): Bool {
        for (t: T in arr.vals()) {
        if (equal(t, item)) {
            return true;
        };
        };
        return false;
    };
    public func listRemove<T>(list: List.List<T>, item: T, equal: (T, T) -> Bool): List.List<T> {
        var newList: List.List<T> = List.nil<T>();
        var size = List.size<T>(list);
        if (size > 0) {
        List.iterate<T>(
            list,
            func (t: T): () {
            if (not equal(t, item)) {
                newList := List.push<T>(t, newList);
            };
            }
        );
        // for (i in Iter.range(0, size - 1)) {
        //   var t: T = List.get<T>(list, i);
        //   if (not equal(t, item)) {
        //     newList := List.push<T>(t, newList);
        //   };
        // };
        };
        return newList;
    };
    public func arrayRemove<T>(arr: [T], item: T, equal: (T, T) -> Bool): [T] {
        var newArray : [T] = [];
        for (t : T in arr.vals()) {
        if (not equal(t, item)) {
            newArray := Array.append<T>(newArray, [t]);
        };
        };
        return newArray;
    };
    public func listRange<T>(list: List.List<T>, offset: Nat, limit: Nat) : List.List<T> {
        let size = List.size<T>(list);
        if (offset >= 0 and size > offset) {
        if (offset == 0) {
            return List.take<T>(list, limit);
        } else {
            let (l1, l2) = List.split<T>(offset, list);
            return List.take<T>(l2, limit);
        };
        };
        return List.nil<T>(); 
    };
    public func arrayRange<T>(arr: [T], offset: Nat, limit: Nat) : [T] {
        let size: Nat = arr.size();
        if (size == 0) {
            return [];
        };

        var end: Nat = Nat.sub(Nat.add(offset, limit),1);
        if (end > Nat.sub(size,1)) {
        end := Nat.sub(size,1);
        };
        var result: [T] = [];
        if (offset >= 0 and size > offset) {
        for (i in Iter.range(offset, end)) {
            result := Array.append(result, [arr[i]]);
        };
        };
        return result;
    };
    public func sort<A>(xs : [A], cmp : (A, A) -> Order.Order) : [A] {
        let tmp : [var A] = Array.thaw(xs);
        sortInPlace(tmp, cmp);
        Array.freeze(tmp)
    };
    public func sortInPlace<A>(xs : [var A], cmp : (A, A) -> Order.Order) {
        if (xs.size() < 2) return;
        let aux : [var A] = Array.tabulateVar<A>(xs.size(), func i { xs[i] });

        func merge(lo : Nat, mid : Nat, hi : Nat) {
        var i = lo;
        var j = mid + 1;
        var k = lo;
        while(k <= hi) {
            aux[k] := xs[k];
            k += 1;
        };
        k := lo;
        while(k <= hi) {
            if (i > mid) {
            xs[k] := aux[j];
            j += 1;
            } else if (j > hi) {
            xs[k] := aux[i];
            i += 1;
            } else if (Order.isLess(cmp(aux[j], aux[i]))) {
            xs[k] := aux[j];
            j += 1;
            } else {
            xs[k] := aux[i];
            i += 1;
            };
            k += 1;
        };
        };

        func go(lo : Nat, hi : Nat) {
        if (hi <= lo) return;
        let mid : Nat = lo + (hi - lo) / 2;
        go(lo, mid);
        go(mid + 1, hi);
        merge(lo, mid, hi);
        };

        go(0, xs.size() - 1);
    };
    public func ternary<T>(expression: Bool, t: T, f: T): T {
        if (expression) {
            return t;
        } else {
            return  f;
        };
    };

    public func isValidEmail(v: Text): Bool {
        var pat : Text.Pattern = #predicate (func (c : Char) : Bool { c == '@'});
        if (not Text.contains(v, pat)){
            return false;
        };
        pat := #predicate (func (c : Char) : Bool { c == '.'});
        if (not Text.contains(v, pat)){
            return false;
        };
        return true;
    };
}
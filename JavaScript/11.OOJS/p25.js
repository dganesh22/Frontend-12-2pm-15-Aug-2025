/* 
    wallet class
        balance property
    
    methods
        debit(val) 
        credit(val) 
*/

class Wallet {
        constructor(bal) {
            this.balance = bal;
        }

        // withdraw
        debit(val) {
            if(this.balance < val) {
                 document.writeln(`<h4> Insufficient balance. total balance amount is &#8377;${this.balance}. </h4>`)
            } else {
                this.balance = this.balance - val;
                 document.writeln(`<h4> amount of &#8377;${val} is debited from account, and balance is &#8377;${this.balance}. </h4>`)
            }
        }

        // deposit
        credit(val) {
            this.balance = this.balance + val;
            document.writeln(`<h4> amount of &#8377;${val} is credited to account, and balance is &#8377;${this.balance}. </h4>`)
        }

}

let x = new Wallet(0);
 document.writeln(`<h4> balance is  &#8377;${x.balance}. </h4>`);

 x.credit(1245.66)
 x.credit(166.14)

 x.debit(903.45)
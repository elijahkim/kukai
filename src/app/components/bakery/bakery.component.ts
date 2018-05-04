import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';
import { MessageService } from '../../services/message.service';
import { TransactionService } from '../../services/transaction.service';
import { ActivityService } from '../../services/activity.service';
import { Account, Balance, Activity } from '../../interfaces';


@Component({
    selector: 'app-bakery',
    templateUrl: './bakery.component.html',
    styleUrls: ['./bakery.component.scss']
})
export class BakeryComponent implements OnInit {

    constructor(
        private walletService: WalletService,
        private messageService: MessageService,
        private transactionService: TransactionService,
        private activityService: ActivityService
    ) { }

    ngOnInit() {
        this.activityService.getDelegates();
    }
}

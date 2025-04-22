// const heliusData  ={
//     "accountData": [ 
//         { "account": "EGXhsR5gVVNvzKUQ6Br9NDSodRbCFUNPtFLA5DDfsmdg", "nativeBalanceChange": -1000080000, "tokenBalanceChanges": [] }, 
//         { "account": "BTd8hKiSTmdVQhUPZYeb7szivigAdqK2epKf4cjt9ove", "nativeBalanceChange": 1000000000, "tokenBalanceChanges": [] },
//         { "account": "11111111111111111111111111111111", "nativeBalanceChange": 0, "tokenBalanceChanges": [] },
//         { "account": "ComputeBudget111111111111111111111111111111", "nativeBalanceChange": 0, "tokenBalanceChanges": [] } ],
//     "description": "EGXhsR5gVVNvzKUQ6Br9NDSodRbCFUNPtFLA5DDfsmdg transferred 1 SOL to BTd8hKiSTmdVQhUPZYeb7szivigAdqK2epKf4cjt9ove.", 
//     "events": [],
//     "fee": 80000, 
//     "feePayer": "EGXhsR5gVVNvzKUQ6Br9NDSodRbCFUNPtFLA5DDfsmdg", 
//     "nativeTransfers": [ 
//     { "amount": 1000000000, "fromUserAccount": "EGXhsR5gVVNvzKUQ6Br9NDSodRbCFUNPtFLA5DDfsmdg", "toUserAccount": "BTd8hKiSTmdVQhUPZYeb7szivigAdqK2epKf4cjt9ove" } ],
//     "signature": "D7UP6LtLCVdmnDKcGNrXvJHWwRvBJyTC5nVUcijXtDt6ryUTzzFAx86rM2VWnZbjawd2T7CVnXWz8frDZcdmeDM", 
//     "slot": 372238407, 
//     "source": "SYSTEM_PROGRAM", 
//     "timestamp": 1743874905, 
//     "tokenTransfers": [], 
//     "transactionError": null, 
//     "type": "TRANSFER" 
// }


const heliusData= { 
    "accountData": [ 
        { "account": "EGXhsR5gVVNvzKUQ6Br9NDSodRbCFUNPtFLA5DDfsmdg", "nativeBalanceChange": -80001, "tokenBalanceChanges": [] }, 
        { "account": "9fMGobE6Av8dS3zhmFNkxjzDCS1pQ5kfFnSTdxDhCieb", "nativeBalanceChange": 0, "tokenBalanceChanges": [ 
            { "mint": "Csq8DUitEeepd77Exess3vkSs57VT3LyE6cdHrNsky9B", "rawTokenAmount": { "decimals": 9, "tokenAmount": "-1" }, 
            "tokenAccount": "9fMGobE6Av8dS3zhmFNkxjzDCS1pQ5kfFnSTdxDhCieb", "userAccount": "EGXhsR5gVVNvzKUQ6Br9NDSodRbCFUNPtFLA5DDfsmdg" } ] }, 
        { "account": "9tJeUC7WZibg5d8ygZDjRDMwv53ndVJVnAtXVeMDEv1x", "nativeBalanceChange": 0, "tokenBalanceChanges": [
            { "mint": "Csq8DUitEeepd77Exess3vkSs57VT3LyE6cdHrNsky9B", "rawTokenAmount": { "decimals": 9, "tokenAmount": "1" }, 
            "tokenAccount": "9tJeUC7WZibg5d8ygZDjRDMwv53ndVJVnAtXVeMDEv1x", "userAccount": "BTd8hKiSTmdVQhUPZYeb7szivigAdqK2epKf4cjt9ove" } ] }, 
        { "account": "ComputeBudget111111111111111111111111111111", "nativeBalanceChange": 0, "tokenBalanceChanges": [] }, 
        { "account": "Csq8DUitEeepd77Exess3vkSs57VT3LyE6cdHrNsky9B", "nativeBalanceChange": 0, "tokenBalanceChanges": [] }, 
        { "account": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA", "nativeBalanceChange": 0, "tokenBalanceChanges": [] } ], 
        "description": "EGXhsR5gVVNvzKUQ6Br9NDSodRbCFUNPtFLA5DDfsmdg transferred 0.000000001 Csq8DUitEeepd77Exess3vkSs57VT3LyE6cdHrNsky9B to BTd8hKiSTmdVQhUPZYeb7szivigAdqK2epKf4cjt9ove.", 
        "events": [], "fee": 80001, "feePayer": "EGXhsR5gVVNvzKUQ6Br9NDSodRbCFUNPtFLA5DDfsmdg", 
        "nativeTransfers": [], 
        "signature": "3DbWh3ithR7T7BHvnrKNr3VkhA4EupXLAduKN1K2d4PhuFeT11e1X4QNYJY29EQ2Xd4L2r9A45EfyaWRSXyHist6", 
        "slot": 372649744, "source": "SOLANA_PROGRAM_LIBRARY", "timestamp": 1744034440, 
        "tokenTransfers": [ { "fromTokenAccount": "9fMGobE6Av8dS3zhmFNkxjzDCS1pQ5kfFnSTdxDhCieb", "fromUserAccount": "EGXhsR5gVVNvzKUQ6Br9NDSodRbCFUNPtFLA5DDfsmdg", "mint": "Csq8DUitEeepd77Exess3vkSs57VT3LyE6cdHrNsky9B", "toTokenAccount": "9tJeUC7WZibg5d8ygZDjRDMwv53ndVJVnAtXVeMDEv1x", "toUserAccount": "BTd8hKiSTmdVQhUPZYeb7szivigAdqK2epKf4cjt9ove", "tokenAmount": 1e-9, "tokenStandard": "Fungible" } ], "transactionError": null, 
        "type": "TRANSFER" 
    }
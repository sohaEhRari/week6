export const addXP=(stats, amount=20)=>{
    return{...stats, xpTotal:stats.xpTotal+amount}

}


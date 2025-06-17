// assets/js/renderLoans.js

window.onload = () => {
  const tbody = document.querySelector("#loan-table-body");

  let totalLoan = 0;
  let totalLeft = 0;
  let totalInstallment = 0;

  loanData.forEach((loan) => {
    totalLoan += Number(loan.loanMoney.replace(/[^0-9.-]+/g, ""));
    totalLeft += Number(loan.leftToRepay.replace(/[^0-9.-]+/g, ""));
    totalInstallment += Number(loan.installment.replace(/[^0-9.-]+/g, ""));

    const row = `
      <tr class="border-b">
        <td class="px-4 py-3">${loan.id.toString().padStart(2, '0')}.</td>
        <td class="px-4 py-3">${loan.loanMoney}</td>
        <td class="px-4 py-3">${loan.leftToRepay}</td>
        <td class="px-4 py-3">${loan.duration}</td>
        <td class="px-4 py-3">${loan.interestRate}</td>
        <td class="px-4 py-3">${loan.installment}</td>
        <td class="px-6 py-3">
          <button class="w-20 text-xs font-semibold px-3 py-1 rounded-full border border-black hover:border-[#1814F3] hover:text-[#1814F3] transition-colors duration-200 text-center">
            Repay
          </button>
        </td>
      </tr>
    `;
    tbody.insertAdjacentHTML("beforeend", row);
  });

  // Tambahkan baris total
  tbody.insertAdjacentHTML("beforeend", `
    <tr class="text-red-500">
      <td class="px-4 py-3">Total</td>
      <td class="px-4 py-3">$${totalLoan.toLocaleString()}</td>
      <td class="px-4 py-3">$${totalLeft.toLocaleString()}</td>
      <td class="px-4 py-3">–</td>
      <td class="px-4 py-3">–</td>
      <td class="px-4 py-3">$${totalInstallment.toLocaleString()}</td>
      <td class="px-4 py-3">–</td>
    </tr>
  `);
};

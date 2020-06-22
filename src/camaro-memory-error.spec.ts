import * as camaro from 'camaro';
import * as fs from 'fs';

const xml = fs.readFileSync('orders.xml').toString();

describe('Camaro Memory Allocation Error', () => {
  it('causes memory allocation error when running with jest watch', async () => {
    const result = await camaro.transform(xml, [
      '//T',
      {
        id: 'O_ORDERKEY',
        status: 'O_ORDERSTATUS',
        priority: 'O_ORDER-PRIORITY',
        date: 'O_ORDERDATE',
        total: 'O_TOTALPRICE',
        comment: 'O_COMMENT',
      },
    ]);

    expect(result).toBeDefined();
  });
});

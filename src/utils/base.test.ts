describe('工具函数测试', () => {
  test('numAddZero', async() => {
    const { numAddZero } = await import('./index')
    expect(numAddZero(5)).toBe('05')
    expect(numAddZero(12)).toBe('12')
    expect(numAddZero('12')).toBe('12')
  })
})

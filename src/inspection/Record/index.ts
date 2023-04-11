
export const main = async () => {
    const r1: Record<string, any> = { aaa: 'aaa', bbb: 'bbb', ccc: { ddd: 'ddd'} }
    const r2: Record<string, any> = ['aaa', 'bbb', { ddd: 'ddd' }]

    console.log('r1:', r1)
    console.log('r2:', r2)

    const keys1 = Object.keys(r1)
    const keys2 = Object.keys(r2)

    console.log('Object.keys(r1):', keys1)
    console.log('Object.keys(r2):', keys2)

    for (const key of keys1) {
        console.log(`r1[${key}]:`, r1[key])
    }

    for (const key of keys2) {
        console.log(`r2[${key}]:`, r2[key])
    }

    console.log(`typeof r1 === 'object': `, typeof r1 === 'object')
    console.log(`typeof r2 === 'object': `, typeof r2 === 'object')
}

main()
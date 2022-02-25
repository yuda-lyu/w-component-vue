// import get from 'lodash/get'
// import each from 'lodash/each'
// import isestr from 'wsemi/src/isestr.mjs'
// import isearr from 'wsemi/src/isearr.mjs'
// import isfun from 'wsemi/src/isfun.mjs'
// import ispm from 'wsemi/src/ispm.mjs'
// import evem from 'wsemi/src/evem.mjs'


// function fsm(opt) {

//     //ev
//     let ev = evem()

//     //emit
//     let emit = (name, msg) => {
//         setTimeout(() => {
//             ev.emit(name, msg)
//         }, 1)
//     }

//     //state
//     let state = get(opt, 'initial', '')

//     // //check
//     // if (!isestr(state)) {
//     //     throw new Error(`opt.initial is not an effective string`)
//     // }

//     //update state
//     emit('initial', {
//         state,
//     })

//     //transitions
//     let transitions = get(opt, 'transitions', [])

//     //check
//     if (!isearr(transitions)) {
//         throw new Error(`opt.transitions is not an effective array`)
//     }

//     //transitions
//     each(transitions, (v) => {

//         //action
//         let action = get(v, 'action', '')
//         if (!isestr(action)) {
//             return true //跳出換下一個
//         }

//         //from
//         let from = get(v, 'from', '')
//         // if (!isestr(from)) {
//         //     return true //跳出換下一個
//         // }

//         //to
//         let to = get(v, 'to', '')
//         // if (!isestr(to)) {
//         //     return true //跳出換下一個
//         // }

//         //fun
//         let fun = get(v, 'fun')

//         //transit
//         let transit = async () => {

//             //check state
//             if (state !== from) {
//                 emit('error', {
//                     action,
//                     state,
//                     from,
//                     to,
//                     msg: `transit error: state[${state}] !== from[${from}]`,
//                 })
//             }

//             emit('before', {
//                 action,
//                 state,
//                 from,
//                 to,
//             })

//             //fun
//             if (isfun(fun)) {

//                 //toTemp by fun
//                 let toTemp = fun(state, action, from, to)

//                 //check promise
//                 if (ispm(toTemp)) {
//                     toTemp = await toTemp
//                 }

//                 //update
//                 state = toTemp

//             }
//             else {

//                 //update
//                 state = to

//             }

//             emit('after', {
//                 action,
//                 state,
//                 from,
//                 to,
//             })

//         }

//         //save
//         ev[action] = transit

//     })

//     return ev
// }

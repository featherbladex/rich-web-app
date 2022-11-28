const{ fromEvent, Subject,merge } = rxjs;


const time = document.querySelector('h3')

const startB = document.querySelector('#starter')
const pauseB = document.querySelector('#pause')
const stopB = document.querySelector('#stopper')

const startClick = fromEvent(startB,'click')
const pauseClick = fromEvent(pauseB,'click')
const stopClick = fromEvent(stopB,'click')

const init_val = 10

startClick.subscribe(()=>console.log("started"))
merge(startClick.pipe(mapTo(true)), pauseB.pipe(mapTo(false)))
    .pipe(
        switchMap(shouldStart => (shouldStart ? interval(1000) : EMPTY)),
        mapTo(-1),
        scan((acc,curr) => acc + curr, init_val),
        takeWhile(val => val>= 0),
        startWith(init_val),
        takeUntil(stopClick),
        repeat()
    )
    .subscribe(val => {time.innerHTML=val.toString()
    });
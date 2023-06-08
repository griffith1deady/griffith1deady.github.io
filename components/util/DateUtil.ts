function calculateEars(date: Date) {
   return new Date(new Date().valueOf() - date.valueOf()).getFullYear() - 1969
}

export { calculateEars }
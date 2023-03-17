function calculateEars(date: Date) {
   return new Date(new Date().valueOf() - date.valueOf()).getFullYear() - 1970
}

export { calculateEars }
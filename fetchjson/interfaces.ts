interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

function printSummary(item: Reportable): void {
  console.log(item.summary());
}

printSummary(oldCivic);

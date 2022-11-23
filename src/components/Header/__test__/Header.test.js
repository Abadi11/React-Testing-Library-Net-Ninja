import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed into title prop', () => {
  render(<Header title="About" />);
  const headingElement = screen.getByText(/about/i);
  expect(headingElement).toBeInTheDocument();
});

// it('should render with the same role heading', () => {
//     render(<Header title="About" />);
//     const headingElement = screen.getByRole("heading", { name: "About" });
//     expect(headingElement).toBeInTheDocument();
//   });

// it('should render with the same title Header', () => {
// render(<Header title="About" />);
// const headingElement = screen.getByTitle("Header");
// expect(headingElement).toBeInTheDocument();
// });

// it('should render with the same test ID', () => {
//     render(<Header title="About" />);
//     const headingElement = screen.getByTestId("header-1");
//     expect(headingElement).toBeInTheDocument();
// });

// // find

// it('should render same text passed into title prop by find method', async () => {
//     render(<Header title="About" />);
//     const headingElement = await screen.findByText(/about/i);
//     expect(headingElement).toBeInTheDocument();
// });
  
// //getAll

// it('should render same text passed into title prop by get all', async () => {
//     render(<Header title="About" />);
//     const headingElements =  screen.getAllByRole("heading");
//     expect(headingElements.length).toBe(2);
// });

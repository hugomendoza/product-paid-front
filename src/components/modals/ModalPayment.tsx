// import { useState, ChangeEvent, FormEvent } from 'react';
// import { ModalLayout } from '../layouts/ModalLayout';

// // --- Interfaces y Estado ---

// interface FormData {
//   fullName: string;
//   email: string;
//   cardNumber: string;
//   expiryDate: string;
//   cvc: string;
// }

// const initialFormData: FormData = {
//   fullName: '',
//   email: '',
//   cardNumber: '',
//   expiryDate: '',
//   cvc: '',
// };

// // --- Componentes de cada Paso ---
// // En una aplicación más grande, estos componentes estarían en sus propios archivos.

// interface StepProps {
//   formData: FormData;
//   handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
// }

// const Step1_CustomerData = ({ formData, handleChange }: StepProps) => (
//   <div className="space-y-4">
//     <p className="text-sm text-slate-500">
//       Primero, necesitamos algunos datos para registrar tu compra.
//     </p>
//     <div>
//       <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">
//         Nombre completo
//       </label>
//       <input
//         type="text"
//         name="fullName"
//         id="fullName"
//         value={formData.fullName}
//         onChange={handleChange}
//         className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         placeholder="Tu nombre y apellido"
//         autoComplete="name"
//       />
//     </div>
//     <div>
//       <label htmlFor="email" className="block text-sm font-medium text-slate-700">
//         Correo electrónico
//       </label>
//       <input
//         type="email"
//         name="email"
//         id="email"
//         value={formData.email}
//         onChange={handleChange}
//         className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         placeholder="tu@correo.com"
//         autoComplete="email"
//       />
//     </div>
//   </div>
// );

// const Step2_CardData = ({ formData, handleChange }: StepProps) => (
//   <div className="space-y-4">
//     <p className="text-sm text-slate-500">Ingresa los datos de tu tarjeta de crédito o débito.</p>
//     <div>
//       <label htmlFor="cardNumber" className="block text-sm font-medium text-slate-700">
//         Número de la tarjeta
//       </label>
//       <input
//         type="tel"
//         name="cardNumber"
//         id="cardNumber"
//         value={formData.cardNumber}
//         onChange={handleChange}
//         className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         placeholder="0000 0000 0000 0000"
//         autoComplete="cc-number"
//         inputMode="numeric"
//       />
//     </div>
//     <div className="grid grid-cols-2 gap-4">
//       <div>
//         <label htmlFor="expiryDate" className="block text-sm font-medium text-slate-700">
//           Vencimiento (MM/AA)
//         </label>
//         <input
//           type="tel"
//           name="expiryDate"
//           id="expiryDate"
//           value={formData.expiryDate}
//           onChange={handleChange}
//           className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           placeholder="MM/AA"
//           autoComplete="cc-exp"
//           inputMode="numeric"
//         />
//       </div>
//       <div>
//         <label htmlFor="cvc" className="block text-sm font-medium text-slate-700">
//           CVC
//         </label>
//         <input
//           type="tel"
//           name="cvc"
//           id="cvc"
//           value={formData.cvc}
//           onChange={handleChange}
//           className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           placeholder="123"
//           autoComplete="cc-csc"
//           inputMode="numeric"
//         />
//       </div>
//     </div>
//   </div>
// );

// const Step3_Confirmation = ({ formData }: { formData: FormData }) => (
//   <div className="space-y-3">
//     <h3 className="text-lg font-medium leading-6 text-slate-900">Confirma tu compra</h3>
//     <p className="text-sm text-slate-500">
//       Por favor, revisa que los datos sean correctos antes de finalizar el pago.
//     </p>
//     <div className="mt-2 text-sm text-slate-600 space-y-2 border-t border-b py-3">
//       <p>
//         <span className="font-semibold">Nombre:</span> {formData.fullName}
//       </p>
//       <p>
//         <span className="font-semibold">Email:</span> {formData.email}
//       </p>
//       <p>
//         <span className="font-semibold">Tarjeta:</span> **** **** ****{' '}
//         {formData.cardNumber.slice(-4)}
//       </p>
//     </div>
//     <div className="text-right font-bold text-lg text-slate-800">Total a pagar: $25.00 USD</div>
//   </div>
// );

// const Step4_Success = () => (
//   <div className="text-center py-4">
//     <h3 className="text-lg font-medium text-green-700">¡Pago realizado con éxito!</h3>
//     <p className="text-sm text-slate-500 mt-2">
//       Hemos enviado un recibo de tu compra a tu correo electrónico.
//     </p>
//   </div>
// );

// // Componentes para cada paso (pueden estar en archivos separados)

// export const ModalPayment = () => {
//   const [isModalOpen, setIsModalOpen] = useState(true); // Controla la visibilidad del modal
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState<FormData>(initialFormData);
//   const [isProcessing, setIsProcessing] = useState(false);

//   const totalSteps = 3; // Total de pasos antes del éxito/error

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleNext = (e: FormEvent) => {
//     e.preventDefault();
//     // Aquí iría la validación del paso actual antes de avanzar
//     // Por ejemplo: if (!validateStep(step, formData)) return;

//     if (step < totalSteps) {
//       setStep(step + 1);
//     } else {
//       // Es el último paso, procesar el pago
//       handleSubmit();
//     }
//   };

//   const handleBack = () => {
//     if (step > 1 && !isProcessing) {
//       setStep(step - 1);
//     }
//   };

//   const handleSubmit = () => {
//     setIsProcessing(true);
//     console.log('Procesando pago con los siguientes datos:', formData);

//     // Simulación de una llamada a la API
//     setTimeout(() => {

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return <Step1_CustomerData />;
//       case 2:
//         return <Step2_CardData />;
//       case 3:
//         return <Step3_Confirmation />;
//       case 4:
//         return <Step4_Success />;
//       default:
//         return <Step1_CustomerData />;
//     }
//   };

//   return (
//     <ModalLayout isOpen={true} onClose={() => {}} title={`Paso ${step} de ${totalSteps}`}>
//       {renderStep()}
//       <footer className="flex justify-end space-x-4 mt-6">
//         {step > 1 && step <= totalSteps && <button onClick={handleBack}>Atrás</button>}
//         {step <= totalSteps && (
//           <button onClick={handleNext}>{step === totalSteps ? 'Pagar' : 'Siguiente'}</button>
//         )}
//       </footer>
//     </ModalLayout>
//   );
// };

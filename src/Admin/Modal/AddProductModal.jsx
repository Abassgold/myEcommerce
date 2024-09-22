import * as Yup from 'yup';
import { useState } from "react"
import { IoMdClose } from "react-icons/io";
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../Redux/AllProductSlice/AllProductSlic';
import axios from 'axios';
const AddProductModal = ({ isOpen, onClose }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [Uploading, setUploading] = useState(false);
  const dispatch = useDispatch()
  const categories = [
    'Electronics',
    'Cameras',
    'Laptop',
    'Accessories',
    'Headphones',
    'Food',
    'Books',
    'Clothes/Shoes',
    'Beauty/Health',
    'Sport',
    'Outdoor',
    'Home'
  ]
  const URI = `${import.meta.env.VITE_URI}/admin/products`
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // Support for multiple files
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    });

    Promise.all(promises).then((base64Images) => {
      const updatedImages = [...selectedImages, ...base64Images]; // Append images
      setSelectedImages(updatedImages); // Update state
      formik.setFieldValue('images', updatedImages); // Update Formik field
    });
  };
  const formik = useFormik({
    initialValues: {
      product: '',
      price: null,
      description: '',
      images: [],
      category: '',
      seller: '',
      stock: null
    },
    onSubmit: async (values) => {
      setUploading(true)
      try {
        const { data } = await axios.post(`${import.meta.env.VITE_URI}/admin/product`, values)
        if (data?.success) {
          dispatch(fetchProduct(URI))
          setSelectedImages([])
          onClose()
        }
      } catch (error) {
        console.log(error?.message)
      } finally {
        setUploading(false)
      }
    },
    validationSchema: Yup.object({
      product: Yup.string().required('Enter product name'),
      price: Yup.number().required('Enter product price'),
      description: Yup.string().required('Enter product description'),
      images: Yup.array().of(Yup.string().required('Image is required')).min(1, 'Please select at least one image'),
      category: Yup.string().required('Enter product category'),
      seller: Yup.string().required('Enter product seller'),
      stock: Yup.number().required('Enter product stock'),
    })
  });
  return (
    <>
      {
        isOpen && (
          <section className="fixed text-[poppins] text-[1.2rem] inset-0 h-screen z-[320] w-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
            <div className=" h-screen flex items-center p-2">
              <div className=" max-w-[50rem] mx-auto bg-[#ffff] p-3 rounded-md max-h-[80vh] relative overflow-auto">
                <IoMdClose className="absolute right-0 top-[2px] text-[1.5rem] cursor-pointer hover:bg-[#0891b2]" onClick={onClose} />
                <div className="container mx-auto text-[1.2rem] overflow-y-auto">
                  <form onSubmit={formik.handleSubmit}>
                    <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
                    {/* Product Name */}
                    <div className="mb-4">
                      <div className=" md:flex items-center justify-between gap-[5rem]">
                        <div className=" flex-1">
                          <label htmlFor="" className="block font-[600] ">Product Name</label>
                          <input
                            type="text"
                            placeholder="Enter product name"
                            className="w-full p-2 border-[3px] outline-none border-[#A692A6]  rounded mt-1"
                            name='product'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div className=" flex-1">
                          <label className="block">Price</label>
                          <input
                            name='price'
                            type="number"
                            placeholder="Enter product price"
                            className="w-full p-2 border-[3px] outline-none border-[#A692A6] rounded mt-1"
                            onChange={formik.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="mb-4">
                      <label className="block ">Description</label>
                      <textarea
                        placeholder="Enter product description"
                        className="w-full p-2 border-[3px] outline-none border-[#A692A6] rounded mt-1 h-24"
                        name='description'
                        onChange={formik.handleChange}
                      ></textarea>
                    </div>

                    {/* Category */}
                    <div className="mb-4 md:flex gap-[5rem] items-center justify-between">
                      <div className=" flex-1">
                        <label className="block ">Category</label>
                        <select className="w-full p-2 border-[3px] outline-none border-[#A692A6] rounded mt-1" name='category' onChange={formik.handleChange}>
                          <option value="">Select a category</option>
                          {categories.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                          ))}
                        </select>
                      </div>
                      <div className=" flex-1">
                        <div  >
                          <label className="block ">Seller</label>
                          <input
                            type="text"
                            placeholder="Enter product seller"
                            className="w-full p-2 border-[3px] outline-none border-[#A692A6] rounded mt-1"
                            name='seller'
                            onChange={formik.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="md:flex items-center justify-between gap-[5rem]">
                        <div className="flex-1">
                          <label className="block ">Images</label>
                          <input
                            type="file"
                            accept='images/*'
                            multiple
                            className="w-full p-2 border-[3px] outline-none border-[#A692A6] rounded mt-1"
                            name='images'
                            onChange={handleFileChange}
                          />
                        </div>
                        <div className="flex-1">
                          <div>
                            <label className="block ">Stock</label>
                            <input
                              type="number"
                              placeholder="Enter product stock"
                              className="w-full p-2 border-[3px] outline-none border-[#A692A6] rounded mt-1"
                              name='stock'
                              onChange={formik.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Submit Button */}
                    <div className="text-right">
                      <button
                        type="submit"
                        className={`bg-[#16A34A] ${Uploading && 'bg-zinc-900'}   px-4 py-2 rounded hover:bg-[#11161A] duration-500 text-white`}
                      >
                        {Uploading ? 'Uploading...' : 'Submit Product'}
                      </button>
                    </div>
                  </form>
                </div>
                <div className=' flex flex-wrap'>
                  {/* <img src={selectedImages} alt="" width={100} className='rounded-lg' /> */}
                  {selectedImages.map((image, index) => (
                    <img src={image} alt="" width={100} className='rounded-lg' key={index} />

                  )
                  )}
                </div>
              </div>
            </div>
          </section>
        )
      }

    </>
  )
}
export default AddProductModal
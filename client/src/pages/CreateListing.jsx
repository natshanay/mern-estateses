export default function CreateListing() {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Create a Listing</h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1 ">
            <input type="text" placeholder="Name" className="border p-3 rounded-lg" id="name" maxLenngth="62" minLength='10' required/>
            <textarea type="text" placeholder="Description" className="border p-3 rounded-lg" id="description" maxLenngth="100" minLength='20' required/>
            <input type="text" placeholder="Address" className="border p-3 rounded-lg" id="address" maxLenngth="100" minLength='10' required/>
            <div className="flex gap-6 flex-wrap">
                
            <div className="flex gap-2">
                <input type="checkbox" id="sale" className="w-5"></input>
                 <span>Sell</span>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" id="rent" className="w-5"></input>
                <span>Rent</span>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" id="parking" className="w-5"></input>
                <span>Parking spot</span>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" id="furnished" className="w-5"></input>
                <span>Furnished</span>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" id="offer" className="w-5"></input>
                <span>Offer</span>
            </div>
            </div>
           <div className="flex flex-wrap gap-6 ">
            <div className="flex gap-2 items-center">
                <input type="number" id="bedrooms" min='1' max='10' required className="p-3 border border-grey-300  rounded-lg" ></input>
                <p>Beds</p>
            </div>
            <div className="flex gap-2 items-center">
                <input type="number" id="bathrooms" min='1' max='10' required className="p-3 border border-grey-300  rounded-lg" ></input>
                <p>Baths</p>
            </div>
            <div className="flex gap-2 items-center">
                <input type="number" id="regularPrice" min='1' max='1000000' required className="p-3 border border-grey-300  rounded-lg" ></input>
                <div className='flex flex-col items-center'>

                <p>Regular price</p>
                <span className='text-xs'>($/month)</span>
                </div>

            </div>
            <div className="flex gap-2 items-center">
                <input type="number" id="discountPrice" min='1' max='10' required className="p-3 border border-grey-300  rounded-lg" ></input>
                <div className='flex flex-col items-center'>
                <p>Discounted price</p>
                    <span className='text-xs'>($/month)</span>
                </div>
            </div>

           </div>
        </div>
<div className="flex flex-col flex-1">

<p className="font-swmibold">Images:
    <span className="font-normal text-grey-700 ml-2">The first image will be the cover (max 6)</span>
</p>
<div className="p-3 border border-grey-300 rounded w-full ">
    <input type="file" id="images" accept='iamges/*' multiple >
    </input>
    <button className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disableed:opacity-80 " >Upload </button>

</div>
<button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Create Listing</button>
</div>
      </form>
    </main>
  )
}

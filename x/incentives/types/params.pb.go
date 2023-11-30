// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: osmosis/incentives/params.proto

package types

import (
	fmt "fmt"
	github_com_cosmos_cosmos_sdk_types "github.com/cosmos/cosmos-sdk/types"
	types "github.com/cosmos/cosmos-sdk/types"
	_ "github.com/cosmos/gogoproto/gogoproto"
	proto "github.com/cosmos/gogoproto/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// Params holds parameters for the incentives module
type Params struct {
	// distr_epoch_identifier is what epoch type distribution will be triggered by
	// (day, week, etc.)
	DistrEpochIdentifier string `protobuf:"bytes,1,opt,name=distr_epoch_identifier,json=distrEpochIdentifier,proto3" json:"distr_epoch_identifier,omitempty" yaml:"distr_epoch_identifier"`
	// group_creation_fee is the fee required to create a new group
	// It is only charged to all addresses other than incentive module account
	// or addresses in the unrestricted_creator_whitelist
	GroupCreationFee github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,2,rep,name=group_creation_fee,json=groupCreationFee,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"group_creation_fee"`
	// unrestricted_creator_whitelist is a list of addresses that are
	// allowed to bypass restrictions on permissionless Group
	// creation. In the future, we might expand these to creating gauges
	// as well.
	// The goal of this is to allow a subdao to manage incentives efficiently
	// without being stopped by 5 day governance process or a high fee.
	// At the same time, it prevents spam by having a fee for all
	// other users.
	UnrestrictedCreatorWhitelist []string `protobuf:"bytes,3,rep,name=unrestricted_creator_whitelist,json=unrestrictedCreatorWhitelist,proto3" json:"unrestricted_creator_whitelist,omitempty" yaml:"unrestricted_creator_whitelist"`
}

func (m *Params) Reset()         { *m = Params{} }
func (m *Params) String() string { return proto.CompactTextString(m) }
func (*Params) ProtoMessage()    {}
func (*Params) Descriptor() ([]byte, []int) {
	return fileDescriptor_1cc8b460d089f845, []int{0}
}
func (m *Params) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Params) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Params.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Params) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Params.Merge(m, src)
}
func (m *Params) XXX_Size() int {
	return m.Size()
}
func (m *Params) XXX_DiscardUnknown() {
	xxx_messageInfo_Params.DiscardUnknown(m)
}

var xxx_messageInfo_Params proto.InternalMessageInfo

func (m *Params) GetDistrEpochIdentifier() string {
	if m != nil {
		return m.DistrEpochIdentifier
	}
	return ""
}

func (m *Params) GetGroupCreationFee() github_com_cosmos_cosmos_sdk_types.Coins {
	if m != nil {
		return m.GroupCreationFee
	}
	return nil
}

func (m *Params) GetUnrestrictedCreatorWhitelist() []string {
	if m != nil {
		return m.UnrestrictedCreatorWhitelist
	}
	return nil
}

func init() {
	proto.RegisterType((*Params)(nil), "osmosis.incentives.Params")
}

func init() { proto.RegisterFile("osmosis/incentives/params.proto", fileDescriptor_1cc8b460d089f845) }

var fileDescriptor_1cc8b460d089f845 = []byte{
	// 365 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x91, 0xcf, 0x4a, 0xf3, 0x40,
	0x14, 0xc5, 0x93, 0x16, 0x0a, 0xcd, 0xb7, 0xf9, 0x08, 0x45, 0x6a, 0xd1, 0x49, 0x0d, 0x08, 0x71,
	0xd1, 0x8c, 0xad, 0xe0, 0xc2, 0x65, 0x8a, 0x82, 0xbb, 0xd2, 0x4d, 0xc1, 0x4d, 0xc8, 0x9f, 0xdb,
	0x74, 0xb0, 0xc9, 0x84, 0x99, 0x69, 0xb5, 0x6f, 0xe1, 0x73, 0xf8, 0x24, 0xdd, 0x08, 0x5d, 0xba,
	0xaa, 0xd2, 0xbe, 0x41, 0x9f, 0x40, 0x32, 0x93, 0x6a, 0x17, 0xe2, 0x6a, 0x66, 0xee, 0xf9, 0xcd,
	0xbd, 0xe7, 0x70, 0x0d, 0x8b, 0xf2, 0x94, 0x72, 0xc2, 0x31, 0xc9, 0x22, 0xc8, 0x04, 0x99, 0x03,
	0xc7, 0x79, 0xc0, 0x82, 0x94, 0xbb, 0x39, 0xa3, 0x82, 0x9a, 0x66, 0x09, 0xb8, 0x3f, 0x40, 0xab,
	0x91, 0xd0, 0x84, 0x4a, 0x19, 0x17, 0x37, 0x45, 0xb6, 0x50, 0x24, 0x51, 0x1c, 0x06, 0x1c, 0xf0,
	0xbc, 0x1b, 0x82, 0x08, 0xba, 0x38, 0xa2, 0x24, 0x53, 0xba, 0xfd, 0x56, 0x31, 0x6a, 0x03, 0xd9,
	0xda, 0x1c, 0x19, 0x47, 0x31, 0xe1, 0x82, 0xf9, 0x90, 0xd3, 0x68, 0xe2, 0x93, 0xb8, 0xe8, 0x3c,
	0x26, 0xc0, 0x9a, 0x7a, 0x5b, 0x77, 0xea, 0xde, 0xd9, 0x6e, 0x6d, 0x9d, 0x2e, 0x82, 0x74, 0x7a,
	0x63, 0xff, 0xce, 0xd9, 0xc3, 0x86, 0x14, 0x6e, 0x8b, 0xfa, 0xfd, 0x77, 0xd9, 0x5c, 0x18, 0x66,
	0xc2, 0xe8, 0x2c, 0xf7, 0x23, 0x06, 0x81, 0x20, 0x34, 0xf3, 0xc7, 0x00, 0xcd, 0x4a, 0xbb, 0xea,
	0xfc, 0xeb, 0x1d, 0xbb, 0xca, 0xa0, 0x5b, 0x18, 0x74, 0x4b, 0x83, 0x6e, 0x9f, 0x92, 0xcc, 0xbb,
	0x5c, 0xae, 0x2d, 0xed, 0xf5, 0xc3, 0x72, 0x12, 0x22, 0x26, 0xb3, 0xd0, 0x8d, 0x68, 0x8a, 0xcb,
	0x34, 0xea, 0xe8, 0xf0, 0xf8, 0x11, 0x8b, 0x45, 0x0e, 0x5c, 0x7e, 0xe0, 0xc3, 0xff, 0x72, 0x4c,
	0xbf, 0x9c, 0x72, 0x07, 0x60, 0x52, 0x03, 0xcd, 0x32, 0x06, 0x5c, 0x30, 0x12, 0x09, 0x88, 0x95,
	0x03, 0xca, 0xfc, 0xa7, 0x09, 0x11, 0x30, 0x25, 0x5c, 0x34, 0xab, 0xed, 0xaa, 0x53, 0xf7, 0x2e,
	0x76, 0x6b, 0xeb, 0x5c, 0x65, 0xfb, 0x9b, 0xb7, 0x87, 0x27, 0x87, 0x40, 0x5f, 0xe9, 0xa3, 0xbd,
	0xec, 0x0d, 0x96, 0x1b, 0xa4, 0xaf, 0x36, 0x48, 0xff, 0xdc, 0x20, 0xfd, 0x65, 0x8b, 0xb4, 0xd5,
	0x16, 0x69, 0xef, 0x5b, 0xa4, 0x3d, 0x5c, 0x1f, 0xc4, 0x28, 0xd7, 0xd7, 0x99, 0x06, 0x21, 0xdf,
	0x3f, 0xf0, 0xbc, 0xd7, 0xc5, 0xcf, 0x87, 0x2b, 0x97, 0xd1, 0xc2, 0x9a, 0x5c, 0xd4, 0xd5, 0x57,
	0x00, 0x00, 0x00, 0xff, 0xff, 0xdb, 0xaa, 0xbf, 0x8b, 0x15, 0x02, 0x00, 0x00,
}

func (m *Params) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Params) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Params) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.UnrestrictedCreatorWhitelist) > 0 {
		for iNdEx := len(m.UnrestrictedCreatorWhitelist) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.UnrestrictedCreatorWhitelist[iNdEx])
			copy(dAtA[i:], m.UnrestrictedCreatorWhitelist[iNdEx])
			i = encodeVarintParams(dAtA, i, uint64(len(m.UnrestrictedCreatorWhitelist[iNdEx])))
			i--
			dAtA[i] = 0x1a
		}
	}
	if len(m.GroupCreationFee) > 0 {
		for iNdEx := len(m.GroupCreationFee) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.GroupCreationFee[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintParams(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	if len(m.DistrEpochIdentifier) > 0 {
		i -= len(m.DistrEpochIdentifier)
		copy(dAtA[i:], m.DistrEpochIdentifier)
		i = encodeVarintParams(dAtA, i, uint64(len(m.DistrEpochIdentifier)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintParams(dAtA []byte, offset int, v uint64) int {
	offset -= sovParams(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Params) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.DistrEpochIdentifier)
	if l > 0 {
		n += 1 + l + sovParams(uint64(l))
	}
	if len(m.GroupCreationFee) > 0 {
		for _, e := range m.GroupCreationFee {
			l = e.Size()
			n += 1 + l + sovParams(uint64(l))
		}
	}
	if len(m.UnrestrictedCreatorWhitelist) > 0 {
		for _, s := range m.UnrestrictedCreatorWhitelist {
			l = len(s)
			n += 1 + l + sovParams(uint64(l))
		}
	}
	return n
}

func sovParams(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozParams(x uint64) (n int) {
	return sovParams(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Params) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowParams
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Params: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Params: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DistrEpochIdentifier", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DistrEpochIdentifier = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field GroupCreationFee", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.GroupCreationFee = append(m.GroupCreationFee, types.Coin{})
			if err := m.GroupCreationFee[len(m.GroupCreationFee)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field UnrestrictedCreatorWhitelist", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.UnrestrictedCreatorWhitelist = append(m.UnrestrictedCreatorWhitelist, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipParams(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthParams
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipParams(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowParams
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowParams
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowParams
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthParams
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupParams
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthParams
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthParams        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowParams          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupParams = fmt.Errorf("proto: unexpected end of group")
)
